import { useRequest, useCreation } from 'ahooks';
import { Space, Select, Badge, Switch, message, Dropdown, Spin } from 'antd';
import { once, get } from 'lodash-es';
import { useCallback, useRef } from 'preact/hooks';
import { BRADGE_REQUEST } from '../bradge';
import { createLAGOCCService } from '../services/lago.alibaba-inc.com';
import { DefClient } from '@ali/def-open-client/lib/browser/entry';

import './lago.scss';

const client = new DefClient({
  // 枚举值 {'daily', 'pre', 'prod'}，默认为 prod
  env: 'prod',
  // 请求超时配置，默认10s
  timeout: 5 * 1000,
  // 响应格式处理函数，默认实现参考 https://yuque.antfin-inc.com/docs/share/dcdebe27-97cc-4c6d-a65f-7d288241c060#:~:text=%E5%88%A4%E6%96%AD%E5%93%8D%E5%BA%94%E6%98%AF%E5%90%A6%E6%88%90%E5%8A%9F%EF%BC%8C%E5%B9%B6%E6%A0%B9%E6%8D%AE%E5%85%B6%E4%BB%96%E5%AD%97%E6%AE%B5%E8%AE%BE%E7%BD%AE%E7%9B%B8%E5%85%B3%E6%95%B0%E6%8D%AE
  // 若提供的默认处理不满足，需要调用者在该函数中进行适配
  resultFormatCallback: (data) => {
    return data;
  },
});
client.init('');

export default function LAGO() {
  // @ts-ignore
  const LAGO_RESOURCE_JS = document.querySelector('link[data-main-js]')?.href;
  const regex = /\/\/(\S+)\/(\S+\/\S+)\/(\d+\.\d+\.\d+)/;
  const match = LAGO_RESOURCE_JS.match(regex);
  const env = get(match, '[1]').includes('dev') ? 'pre' : 'prod';
  const path = get(match, '[2]');
  const curentVersion = get(match, '[3]');

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const { run: pubPreRun, loading } = useRequest(
    (iframe, pageId) =>
      createLAGOCCService(BRADGE_REQUEST.createRequest(iframe)).pagePubPre({
        appId: pageId,
      }),
    {
      manual: true,
      onSuccess: () => {
        messageApi.open({
          type: 'success',
          content: '预发发布成功',
        });
      },
    },
  );
  const {
    run: lagoPageInfoRun,
    data: pageId,
    loading: lagoPageInfoLoading,
  } = useRequest((iframe) =>
    createLAGOCCService(BRADGE_REQUEST.createRequest(iframe)).getPageInfo({
      pathname: location.pathname,
    }),
  );

  const handleLagoRef = useCreation(
    () =>
      once((dom) => {
        iframeRef.current = dom;
        lagoPageInfoRun(dom);
      }),
    [],
  );

  const onMenuClk = useCallback(
    ({ key }) => {
      switch (key) {
        case 1:
          window.open(`https://lago.alibaba-inc.com/workspace/lzd_asc/page/${pageId}/editor`);
          break;
        default:
          break;
      }
    },
    [pageId],
  );
  const onSwitchEnv = useCallback((toProd) => {
    !toProd && location.replace(location.href.replace(/(sellercenter)/, 'sellercenter-staging'));
    toProd && location.replace(location.href.replace(/(sellercenter-staging)/, 'sellercenter'));
  }, []);

  // @ts-ignore
  const { data: appInfoRes } = useRequest(client.get.bind(client), {
    defaultParams: ['/v1.0/work/apps/infos/basic', { repo: path }],
  });
  const appId = get(appInfoRes, 'data.app.id');
  const { data: iterationsInfoRes } = useRequest(client.get.bind(client), {
    defaultParams: [`/v1.0/work/apps/${appId}/iterations`, { pn: 0, rn: 10, status: env === 'pre' ? 2 : 3 }],
    ready: !!appId,
  });
  console.log('iterationsInfoRes', iterationsInfoRes);
  const iterationsInfo = get(iterationsInfoRes, 'data.iterations.iterations', []);
  const versionOptions = iterationsInfo.map((i) => ({
    value: i.version,
    label: `${i.version}${curentVersion === i.version ? '(当前版本)' : ''}`,
  }));
  return (
    <>
      {contextHolder}
      <Space wrap className="lago-tool-box">
        <Switch
          onChange={onSwitchEnv}
          defaultChecked={env === 'prod'}
          unCheckedChildren={'预发'}
          checkedChildren={'线上'}
        />
        <Select style={{ width: 200 }} placement="topLeft" defaultValue={curentVersion} options={versionOptions} />
        <Spin size="small" spinning={!pageId} tip={'Query LAGO Info'}>
          <Dropdown.Button
            onClick={() => pubPreRun(iframeRef.current, pageId)}
            loading={loading}
            disabled={!pageId}
            placement="topLeft"
            menu={{ items: [{ component: 'a', key: 1, label: 'LAGO LINK' }], onClick: onMenuClk }}
          >
            发布预发
          </Dropdown.Button>
        </Spin>
      </Space>
      <iframe
        ref={handleLagoRef}
        style="display:none"
        crossOrigin={'anonymous'}
        src={'https://lago.alibaba-inc.com?identifier=public_my_managed'}
      ></iframe>
    </>
  );
}
