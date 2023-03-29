import { GM_getValue, GM_registerMenuCommand, GM_setValue } from "$";
import { Modal, Input, message, Button, Alert, Card, Space } from 'antd';

const { TextArea } = Input;

const $$ = document.querySelector;
const title = window.location.pathname.split('/')[1];
const langSelector = document.querySelector("[data-testid='transcript__language-dropdown']") as HTMLSelectElement;
function getLang() {
  const selector = document.querySelector("[data-testid='transcript__language-dropdown']") as HTMLSelectElement;
  if (!selector) return { label: 'English', value: 'en' };

  const value = selector?.value;
  const options = [...selector.children] as Array<HTMLOptionElement>;
  const label = options.find((option) => option.value === value)?.innerText;

  return {
    label, value
  }
}

function getParagraphs() {
  const container = document.querySelector("[data-testid='paragraphs-container']");
  const result = [];
  if (!container) return;
  const paras = [...container?.children];
  return paras.map(p => {
    console.log('=== p', p.children[1].innerText);
    return (p?.children[1] as HTMLElement)?.innerText + '\n';
  });
}

function run() {  
  GM_registerMenuCommand(`保存文稿`, () => {
    const lang = getLang();
    console.log('href', window.location.href, lang)
    const title = window.location.pathname.split('/')[1];
    const prev = GM_getValue(title) || {};
    console.log('lang', lang)
    GM_setValue(title, {
      ...prev,
      [lang?.value]: {
        ...lang,
        content: getParagraphs()
      }
    })
    message.success(`🎉 ${lang.label} 文稿已保存！`);
  })

  GM_registerMenuCommand(`生成文稿`, () => {
    const transcripts = GM_getValue(title);
    console.log('transcripts', transcripts)
    if (!transcripts) {
      return message.warning(`请先保存文稿!`)
    }
    Modal.confirm({
      bodyStyle: { height: '80vh', marginLeft: '10px', overflowY: 'auto' },
      width: '50%',
      style: {
        height: '80vh'
      },
      okButtonProps: {
        style: { background: '#1677ff'}
      },
      title: '确认文稿',
      content: (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          {Object.values(transcripts).map(ts => (
            <Card title={ts.label}>
              {ts.content.map(c => <p style={{ marginBottom: '10px' }}>{c}</p>)}
            </Card>
          ))}
      </Space>
      )
    })
  })
}

run();