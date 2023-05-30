import { FunctionComponent, ComponentChildren } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { unsafeWindow } from '$';
import { message } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Divider, Space, Typography, Drawer, Tooltip, Card, List, Button } from 'antd';
import { BugOutlined, ReloadOutlined, CopyOutlined } from '@ant-design/icons';
import { openDefPage } from '@/utils/def';
import { isPre } from '@/utils/env';
import { openGitLabPage, openAstorePage } from '@/utils/git';
import './index.scss';

declare global {
  interface Window {
    lib: any;
  }
}

type ChildrenProps = {
  moduleName: string;
  moduleAliasName: string;
  backgroundColor?: string;
  env?: 'msite' | 'pc';
  children?: ComponentChildren;
};

const ListItem = List.Item as any;

export default ({ moduleName, moduleAliasName, backgroundColor }: ChildrenProps) => {
  const [visible, setVisible] = useState(false);

  // const [moduleNameId, setModuleNameId] = useState(moduleName);

  const showDevTools = () => {
    setVisible(true);
  };

  const hideDevTools = () => {
    setVisible(false);
  };

  const defHandleClick = () => {
    openDefPage(moduleAliasName);
  };

  const gitHandleClick = () => {
    openGitLabPage(moduleAliasName);
  };

  const astroeHandleClick = () => {
    openAstorePage(moduleName);
  };

  const cacheHandleClick = () => {
    const tenantIds = JSON.stringify(['ARISE_ES']);
    const componentKeys = JSON.stringify([moduleName ?? '']);

    const promise = unsafeWindow.lib.mtop.request({
      api: 'mtop.lazada.shop.component.cache.reset',
      v: '1.0',
      method: 'GET',
      dataType: 'json',
      data: {
        tenantIds,
        componentKeys,
        isAll: true,
      },
    });

    promise.then(
      function ({ retType, data, ret }) {
        message.open({
          type: 'success',
          content: 'The module cache has been cleared, and the current page will be refreshed in 3 seconds',
          duration: 3,
          onClose: () => {
            unsafeWindow.location.reload();
          },
        });
      },
      function ({ retType, data, ret }) {
        message.open({
          type: 'error',
          content: ret,
          duration: 3,
        });
      },
    );
  };

  const copyHandleClick = (value) => (e) => {
    const input = document.createElement('input');
    input.value = value;
    document.body.appendChild(input);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      message.open({
        type: 'success',
        content: 'The field value has been copied',
        duration: 3,
      });
    }
    document.body.removeChild(input);
  };

  const renderItemLink = (item) => {
    return (
      <a href={item.link} target="_blank">
        {item.title}
      </a>
    );
  };

  const renderItemContent = (item) => {
    return (
      <>
        {item.title}
        <CopyOutlined className="store-btn-copy" onclick={copyHandleClick(item.title)} />
      </>
    );
  };

  return (
    <>
      <div class="store-dev-tools" data-moduleName={moduleName} style={{ backgroundColor: backgroundColor }}>
        <div className="store-dev-tools-icon">
          {/* <Tooltip placement="left" title={moduleName}> */}
          <BugOutlined onclick={showDevTools} />
          {/* </Tooltip> */}
        </div>
        <div className="store-dev-tools-icon">
          <ReloadOutlined onclick={cacheHandleClick} />
        </div>
      </div>
      <Drawer
        className="store-drawer-container"
        title="Store Dev Tools"
        placement="right"
        onClose={hideDevTools}
        open={visible}
      >
        <div className="store-dev-tools-panel">
          <Space split={<Divider type="vertical" />}>
            <Typography.Link onclick={defHandleClick}>DEF</Typography.Link>
            <Typography.Link onclick={gitHandleClick}>GIT</Typography.Link>
            <Typography.Link onclick={astroeHandleClick}>Astore</Typography.Link>
            <Typography.Link onclick={cacheHandleClick}>Clear Cache</Typography.Link>
          </Space>
        </div>
        <List
          className="store-dev-tools-list"
          size="small"
          bordered
          dataSource={[
            { type: 'text', label: 'Module Name', title: moduleName },
            { type: 'text', label: 'Module Alias Name', title: moduleAliasName },
            {
              type: 'link',
              label: 'Diamond Configurations',
              title: 'lazada.shop.front.version.content',
              link: `https://mse.alibaba-inc.com/${
                isPre ? 'rg-de-2-pre' : 'rg-de-2'
              }/diamond/configlist/configedit?DataId=lazada.shop.front.version.content&Group=ARISE_ES_GLOBAL_SHOP&tab=edit`,
            },
            {
              type: 'link',
              label: 'Store Developer Document',
              title: '店铺前端开发指南',
              link: 'https://aliyuque.antfin.com/lggiz5/mdsozh/dr75296ggbnvmg15?singleDoc#',
            },
          ]}
          renderItem={(item) => (
            <ListItem>
              <List.Item.Meta
                title={item.label}
                description={item.type === 'link' ? renderItemLink(item) : renderItemContent(item)}
              ></List.Item.Meta>
            </ListItem>
          )}
        />
      </Drawer>
    </>
  );
};
