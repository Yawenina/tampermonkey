import { GM_registerMenuCommand } from "$";
import { Modal, Input, Space, Button } from 'antd';

const { TextArea } = Input;

const $$ = document.querySelector;
function getParagraphs() {
  const container = document.querySelector("[data-testid='paragraphs-container']");
  const result = [];
  if (!container) return;
  const paras = [...container?.children];
  return paras.map(p => {
    console.log('=== p', p.children[1].innerText);
    return (p?.children[1] as HTMLElement)?.innerText;
  });
}

function run() {
  GM_registerMenuCommand('生成文稿', () => {
    const paras  = getParagraphs();
    console.log('== paras', paras);
    Modal.confirm({
      bodyStyle: { height: '80vh', marginLeft: '10px'},
      width: '50%',
      style: {
        height: '80vh'
      },
      okButtonProps: {
        style: { background: '#1677ff'}
      },
      title: '确认文稿',
      content: (
      <TextArea value={paras?.join('\n\n')} style={{ height: '70vh' }}/>
      )
    })
  })
}

run();