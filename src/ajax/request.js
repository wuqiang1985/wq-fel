/**
 * 发送ajax请求
 * @memberof ajax
 * @method ajax#request
 * @param {string} url 发送请求的url
 * @param {Object} options 发送请求的选项参数
 * @config {String} [method] 请求发送的类型，默认为GET
 * @config {String|json} [data] 需要发送的数据
 * @config {Object} [headers] 要设置的http request header
 * @config {Boolean} [isCache] 是否需要缓存，默认为false
 * @config {string} [dataType] 返回类型，默认为text，可选项json，script
 * @returns {Promise} 发送请求的Promise对象
 */
function request(url, {
    method = 'GET',
    data,
    headers,
    isCache = false,
    dataType = 'text',
}) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const textHandler = function (resText) {
            let res;
            switch (dataType) {
            case 'json':
                res = JSON.parse(resText);
                break;
            case 'script':
                res = resText;
                (window.execScript || function (code) {
                    window.eval.call(window, code);
                })(resText);
                break;
            default:
                res = resText;
                break;
            }

            return res;
        };
        const stateChangeHandler = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(textHandler(xhr.responseText));
                } else {
                    reject(xhr.status);
                }
            }
        };
        let reqUrl = url;

        if (method === 'GET') {
            if (data) {
                reqUrl += (url.indexOf('?') >= 0 ? '&' : '?') + data;
            }
            if (!isCache) {
                reqUrl += `${url.indexOf('?') >= 0 ? '&' : '?'}WQ_${+new Date()}=1`;
            }
        }

        if (method === 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        for (const key in headers) {
            if (Object.prototype.hasOwnProperty.call(headers, key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }

        xhr.onreadystatechange = stateChangeHandler;
        xhr.open(method, reqUrl, true);
        xhr.send(data);
    });

    return promise;
}

export default request;
