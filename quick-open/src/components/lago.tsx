import { useRequest, useCreation, useSetState } from 'ahooks';
import { Space, Select, Popover, Switch, Badge, Dropdown, Spin, notification, Button } from 'antd';
import { once, get } from 'lodash-es';
import { useCallback, useRef } from 'preact/hooks';
import { BRADGE_REQUEST } from '../bradge';
import { createLAGOCCService } from '../services/lago.alibaba-inc.com';
import { DefClient } from '@ali/def-open-client/lib/browser/entry';

import './lago.scss';

const workspaceId = location.host.includes('workstation') ? 'lzd_workstation' : 'lzd_asc';
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
  // @ts-ignore
  const LAGO_RESOURCE_CSS = document.querySelector('link[data-main-css]')?.href;
  const regex = /\/\/(\S+)\/(\S+\/\S+)\/(\d+\.\d+\.\d+)/;
  const match = LAGO_RESOURCE_JS.match(regex);
  const env = get(match, '[1]').includes('dev') ? 'pre' : 'prod';
  const path = get(match, '[2]');
  const curentVersion = get(match, '[3]');
  const [state, setState] = useSetState({
    changeVersion: curentVersion,
  });
  const [messageApi, contextHolder] = notification.useNotification();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { run: pubPreRun, loading: pubPreLoading } = useRequest(
    (iframe, pageId) =>
      createLAGOCCService(BRADGE_REQUEST.createRequest(iframe)).pagePubPre({
        appId: pageId,
      }),
    {
      manual: true,
      onSuccess: () => {
        messageApi.info({
          message: '预发发布成功',
          description: '1s后自动刷新页面',
          placement: 'bottomRight',
          duration: 1,
          onClose: () => location.reload(),
        });
      },
    },
  );
  const {
    run: lagoPageInfoRun,
    data: lagoPageInfo,
    loading: lagoPageInfoLoading,
  } = useRequest(
    (iframe) =>
      createLAGOCCService(BRADGE_REQUEST.createRequest(iframe)).getPageInfo({
        pathname: location.pathname,
        workspaceId,
      }),
    {
      onError: (e) => {
        console.log('lagoPageInfoRun onError:', e);
      },
    },
  );
  const { runAsync: versionUpdateRun, loading: versionUpdateLoading } = useRequest(
    (iframe, pageId, config) =>
      createLAGOCCService(BRADGE_REQUEST.createRequest(iframe)).updatePageInfo({
        appId: pageId,
        ...config,
      }),
    {
      manual: true,
    },
  );
  const pageId = get(lagoPageInfo, 'id');
  const handleLagoRef = useCreation(
    () =>
      once((dom) => {
        iframeRef.current = dom;
        lagoPageInfoRun(dom);
      }),
    [],
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
  const { data: iterationsInfoRes, loading: iterationsInfoLoading } = useRequest(client.get.bind(client), {
    defaultParams: [`/v1.0/work/apps/${appId}/iterations`, { pn: 0, rn: 10, ...(env === 'prod' ? { status: 3 } : {}) }],
    ready: !!appId,
  });
  console.log('iterationsInfoRes', iterationsInfoRes);
  const iterationsInfo = get(iterationsInfoRes, 'data.iterations.iterations', []);
  const o2appInfo = get(iterationsInfoRes, 'data.app', {});
  const currentIterationsInfo = iterationsInfo.find((i) => i.version === curentVersion);
  const versionOptions = iterationsInfo.map((i) => ({
    value: i.version,
    label: (
      <Space wrap>
        <span>
          {i.version}
          {curentVersion === i.version ? '(当前版本)' : ''}
        </span>
        <Badge color={i.status === 2 ? '#1890ff' : '#52c41a'} text={i.status === 2 ? '未上线' : '已上线'} />
      </Space>
    ),
  }));
  const onMenuClk = useCallback(
    ({ key }) => {
      switch (key) {
        case 1:
          window.open(`https://lago.alibaba-inc.com/workspace/${workspaceId}/page/${pageId}/editor`);
          break;
        case 2:
          if (currentIterationsInfo) {
            window.open(`https://space.o2.alibaba-inc.com/iteration/${currentIterationsInfo.id}/basic?env=daily`);
          } else {
            'id' in o2appInfo && window.open(`https://space.o2.alibaba-inc.com/app/${o2appInfo.id}/iteration`);
          }
        default:
          break;
      }
    },
    [pageId, currentIterationsInfo, o2appInfo],
  );
  const onPublishPre = useCallback(() => {
    const { spmb } = lagoPageInfo;
    if (curentVersion !== state.changeVersion) {
      versionUpdateRun(iframeRef.current, pageId, {
        LAGO_SPMB: spmb,
        LAGO_RESOURCE_JS: LAGO_RESOURCE_JS.replace(/^https?:\/\/[^/]+/, '').replace(
          /(\d+\.\d+\.\d+)/,
          state.changeVersion,
        ),
        LAGO_RESOURCE_CSS: LAGO_RESOURCE_CSS.replace(/^https?:\/\/[^/]+/, '').replace(
          /(\d+\.\d+\.\d+)/,
          state.changeVersion,
        ),
      }).then(() => {
        pubPreRun(iframeRef.current, pageId);
      });
    } else {
      pubPreRun(iframeRef.current, pageId);
    }
  }, [iframeRef, pageId, lagoPageInfo, state.changeVersion]);

  return (
    <>
      {contextHolder}
      <Space wrap className="lago-tool-box">
        <img
          className="lago-tool-logo"
          src={'http://img.alicdn.com/imgextra/i2/O1CN017WKB3e1cQYecaLPMr_!!6000000003595-55-tps-87-87.svg'}
        />
        <Switch
          onChange={onSwitchEnv}
          defaultChecked={env === 'prod'}
          unCheckedChildren={'预发'}
          checkedChildren={'线上'}
        />
        <Select
          loading={iterationsInfoLoading}
          onChange={(changeVersion) => {
            setState({ changeVersion });
          }}
          style={{ width: 200 }}
          placement="topLeft"
          defaultValue={state.changeVersion}
          options={versionOptions}
        />
        <Spin size="small" spinning={lagoPageInfoLoading} tip={'Query LAGO Info'}>
          {env === 'prod' ? (
            <Button loading={lagoPageInfoLoading} disabled={!pageId} onClick={() => onMenuClk({ key: 1 })}>
              Goto LAGO
            </Button>
          ) : (
            <Popover
              open={curentVersion !== state.changeVersion}
              content={`${curentVersion}=>${state.changeVersion}`}
              title={'发布同时会更新版本号'}
            >
              <Dropdown.Button
                onClick={onPublishPre}
                loading={pubPreLoading || versionUpdateLoading}
                disabled={!pageId}
                placement="topLeft"
                menu={{
                  items: [
                    { key: 1, label: 'LAGO LINK' },
                    { key: 2, label: 'O2 LINK' },
                  ],
                  onClick: onMenuClk,
                }}
              >
                发布预发
              </Dropdown.Button>
            </Popover>
          )}
        </Spin>
      </Space>
      <iframe
        ref={handleLagoRef}
        style="display:none"
        crossOrigin={'anonymous'}
        src={'https://lago.alibaba-inc.com/workbench?identifier=for_lago_tool'}
      ></iframe>
    </>
  );
}
