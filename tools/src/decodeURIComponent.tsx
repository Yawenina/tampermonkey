import {Button, Input, Modal, Space} from "antd";
import React from "react";
import {useState} from "preact/compat";
import MonacoEditor from '@uiw/react-monacoeditor';
export function Content() {
  const [value, setValue] = useState('');
  const [codes, setCodes] = useState([]);
  const onClick = (e) => {
    console.log('🚀### e =', e)
    console.log('🚀### e =', e.target)
    setCodes([value, ...codes]);
  }

  console.log('🚀 ~ file: decodeURIComponent.tsx ~ line 80 ~ Content ~ codes', codes);
  return (
    <Space direction={'vertical'} style={{ width: '100%'}}>
      <Input.TextArea onChange={e => setValue(e.target.value)}/>
      <Space align={'right'}>
        <Button onClick={onClick} type={'primary'}>Parse</Button>
        <Button onClick={() => setCodes([])} type={'secondary'}>Clear</Button>
      </Space>
      {codes.map((code, index) => {
        return (
          <MonacoEditor
            language="javascript"
            width={'100%'}
            height="200px"
            value={decodeURIComponent(code)?.split("&").join("\n")}
            options={{
              theme: 'vs-dark',
            }}
          />
        )
      })}
    </Space>
  )
}
export default function DecodeURIComponent() {
  Modal.info({
    closable: true,
    title: 'decodeURIComponent',
    content: <Content/>,
    width: '80vw',
    height: '80vh',
    style: {width: '80vw', height: '80vh', to: 20, overflow: 'scroll' },
    footer: null
  })
}
