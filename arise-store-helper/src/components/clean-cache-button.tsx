import { FunctionComponent, ComponentChildren } from 'preact';
import { unsafeWindow } from '$';
import { message } from 'antd';

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

const CleanCacheButton: FunctionComponent = ({ text, env }: ChildrenProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleClick = () => {
    // reset mtop config
    unsafeWindow.lib.mtop.config.prefix = '';
    unsafeWindow.lib.mtop.config.subDomain = env === 'pre' ? 'pre-acs-m' : 'acs-m';
    unsafeWindow.lib.mtop.config.mainDomain = 'miravia.es';

    const componentId = document.querySelector(
      '.module-detail-info .module-base-desc .module-attributes .module-desc-row div:nth-child(1) span:nth-child(2)',
    ).textContent;
    const tenantIds = JSON.stringify(['ARISE_ES']);
    const componentKeys = JSON.stringify([componentId ?? '']);

    const promise = unsafeWindow.lib.mtop.request({
      api: 'mtop.arise.shop.component.cache.reset',
      v: '2.0',
      method: 'GET',
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
          content: '清除缓存成功，3秒刷新当前页面',
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

export default CleanCacheButton;
