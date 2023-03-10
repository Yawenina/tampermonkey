import { BRADGE_REQUEST } from '@/bradge';
import { createCCService } from '@/services/cc.alibaba-inc.com';
import { useCreation, useRequest } from 'ahooks';
import { Button } from 'antd';
import { once } from 'lodash-es';
import { useRef } from 'preact/hooks';

export function AliyunBtn({ iframeRef, item }) {
  const { loading, run: open } = useRequest(
    (item) => {
      return createCCService(BRADGE_REQUEST.createRequest(iframeRef.current)).getAliyunPath(item);
    },
    {
      manual: true,
      onSuccess(res) {
        window.open(res.uri);
      },
    },
  );
  return (
    <Button size="small" loading={loading} type="link" onClick={() => open(item)}>
      一键打开 {item.displayName} SLS日志
    </Button>
  );
}

export function SLSBtn() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const {
    loading,
    run,
    data = [],
  } = useRequest((iframe) => createCCService(BRADGE_REQUEST.createRequest(iframe)).getMyManaged(), { manual: true });

  const handleRef = useCreation(
    () =>
      once((dom) => {
        iframeRef.current = dom;
        run(dom);
      }),
    [],
  );

  return (
    <>
      {loading && <span>Loading...</span>}
      {data?.map((item) => (
        <AliyunBtn iframeRef={iframeRef} item={item} />
      ))}
      {!loading && !data?.length && <span>该应用还未接入SLS，或者您还未拥有该应用SLS读取权限</span>}

      <iframe
        ref={handleRef}
        style="display:none"
        crossOrigin={'anonymous'}
        src={'https://cc.alibaba-inc.com/resource?identifier=public_my_managed&___$$$aoneScript'}
      ></iframe>
    </>
  );
}
