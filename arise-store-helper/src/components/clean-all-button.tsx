import { FunctionComponent, ComponentChildren } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { unsafeWindow } from '$';
import { message, Modal } from 'antd';
import { getAstoreAllModules } from '@/utils/astore';

declare global {
  interface Window {
    lib: any;
  }
}

type ChildrenProps = {
  text?: string;
  env?: 'pre' | 'prod';
  children?: ComponentChildren;
};

const CleanAllButton: FunctionComponent = ({ text, env }: ChildrenProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getAstoreAllModules().then((res) => {
      if (res.success) {
        setDataSource(res.data.dataList);
      }
    });
  }, []);

  const handleClick = () => {
    // reset mtop config
    unsafeWindow.lib.mtop.config.prefix = '';
    unsafeWindow.lib.mtop.config.subDomain = env === 'pre' ? 'pre-acs-m' : 'acs-m';
    unsafeWindow.lib.mtop.config.mainDomain = 'miravia.es';

    const moduleKeys = dataSource.map((item) => item.moduleKey);
    const tenantIds = JSON.stringify(['ARISE_ES']);
    const componentKeys = JSON.stringify(moduleKeys);

    if (env === 'prod') {
      Modal.confirm({
        title: '一键清除缓存可能会影响线上业务，是否继续？',
        onOk: () => {
          cleanCache(tenantIds, componentKeys);
        },
        okText: '继续',
        cancelText: '取消',
      });
      return;
    }
    cleanCache(tenantIds, componentKeys);
  };

  const cleanCache = (tenantIds, componentKeys) => {
    const promise = unsafeWindow.lib.mtop.request({
      api: 'mtop.arise.shop.component.cache.reset',
      v: '2.0',
      type: 'POST',
      dataType: 'json',
      data: {
        tenantIds,
        componentKeys,
        isAll: true,
      },
    });

    promise.then(
      function () {
        messageApi.open({
          type: 'success',
          content: '全部模块缓存已清除，3秒后刷新当前页面',
          duration: 3,
          onClose: () => {
            unsafeWindow.location.reload();
          },
        });
      },
      function ({ ret }) {
        messageApi.open({
          type: 'error',
          content: ret,
          duration: 3,
          onClose: () => {
            unsafeWindow.location.reload();
          },
        });
      },
    );
  };

  return (
    <>
      {contextHolder}
      <span class="next-btn-helper" onClick={handleClick}>
        {text}
      </span>
    </>
  );
};

export default CleanAllButton;
