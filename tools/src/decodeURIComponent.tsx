import {Button, Input, Modal, Space} from "antd";
import React from "react";
import {useState} from "preact/compat";
import MonacoEditor from '@uiw/react-monacoeditor';

const options = {
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: false,
  theme: 'vs-dark',
  scrollbar: {
    // Subtle shadows to the left & top. Defaults to true.
    useShadows: false,
    // Render vertical arrows. Defaults to false.
    verticalHasArrows: true,
    // Render horizontal arrows. Defaults to false.
    horizontalHasArrows: true,
    // Render vertical scrollbar.
    // Accepted values: 'auto', 'visible', 'hidden'.
    // Defaults to 'auto'
    vertical: 'visible',
    // Render horizontal scrollbar.
    // Accepted values: 'auto', 'visible', 'hidden'.
    // Defaults to 'auto'
    horizontal: 'visible',
    verticalScrollbarSize: 17,
    horizontalScrollbarSize: 17,
    arrowSize: 30,
  },
};

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
        <Button onClick={() => {
          setValue('');
          setCodes([]);
        }} type={'secondary'}>Clear</Button>
      </Space>
      {codes.map((code, index) => {
        return (
          <MonacoEditor
            language="javascript"
            width={'100%'}
            height="200px"
            value={decodeURIComponent(code)?.split("&").join("\n")}
            options={options}
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
