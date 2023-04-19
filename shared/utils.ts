import { GM_xmlhttpRequest } from '$';

export function wait(time: number) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

// 每次出现某元素时执行，这在脚本插入时非常有用
export async function everytime(fn: () => Element, callback: (el: Element) => void) {
  while (true) {
    await wait(500);
    const result: any = fn();
    if (result && !result.__used) {
      result.__used = true;
      callback(result);
    }
  }
}

// 用油猴的 GM_xmlhttpRequest 发送请求，可直接跨域请求
export async function monkeyRequest(options: Parameters<typeof GM_xmlhttpRequest>[0]): Promise<any> {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  return new Promise((resolve, reject) => {
    // 跨域
    GM_xmlhttpRequest({
      method: 'GET',
      ...options,
      headers,
      onload: function (res) {
        if (res.status === 200) {
          const text = res.responseText;
          try {
            const json = JSON.parse(text);
            resolve(json);
          } catch (e) {
            reject(e);
          }
        } else {
          reject(res);
        }
      },
    });
  });
}
