export function wait(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}
export async function everytime(fn, callback) {
  while (true) {
    await wait(500);
    const result = fn();
    if (result && !result.__used) {
      result.__used = true;
      callback(result);
    }
  }
}

declare const GM_xmlhttpRequest: any;
export async function request(options) {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  return new Promise((resolve, reject) => {
    // 跨域
    GM_xmlhttpRequest({
      method: "GET",
      ...options,
      headers,
      onload: function (res) {
        if (res.status === 200) {
          const text = res.responseText;
          const json = JSON.parse(text);
          resolve(json);
        } else {
          reject(res);
        }
      },
    });
  });
}
