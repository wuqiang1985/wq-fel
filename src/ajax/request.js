import jsonToQuery from '../url/jsonToQuery';


/**
 * 发送ajax请求
 * @memberof ajax
 * @method ajax#request
 * @param {string} url 请求的url
 * @param {object} option 请求配置项
 * @example
 * // option配置参数详解
 * {
 *     method,     // [string] 请求方法，默认为GET，可取值[GET|POST]
 *     data,       // [string|object] 请求数据，默认为null
 *     headers,    // [object] 要设置的http request header
 *     isCache,    // [boolean] 是否需要缓存，false
 *     dataType,   // [string] 返回类型，默认为text，可取值[text|json|script]
 * }
 * @example
 * // get调用
 * request('http://www.joox.com/cgi', {
 *     data: {
 *         lang: 'en',
 *         area: 'hk',
 *     }
 * }).then(res => {
 *     successHandler(res);
 * }).catch(error => {
 *     failureHandler(error);
 * });
 *
 * // post调用
 * request('http://www.joox.com/cgi', {
 *     method: 'POST',
 *     data: {
 *         lang: 'en',
 *         area: 'hk',
 *     }
 * }).then(res => {
 *     successHandler(res);
 * }).catch(error => {
 *     failureHandler(error);
 * });
 * @returns {Promise} 发送请求的Promise对象
 */
function request(url, {
    method = 'GET',
    data = null,
    headers,
    isCache = false,
    dataType = 'text',
} = {}) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const reqMethod = method.toUpperCase();
        const textHandler = function (resText) {
            let res;
            switch (dataType.toLowerCase()) {
            case 'text':
                res = resText;
                break;
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
        const dataHandler = function () {
            let result = '';
            if (typeof data === 'string') {
                result = data;
            } else if (Object.prototype.toString.call(data) === '[object Object]') {
                result = jsonToQuery(data);
            }

            return result;
        };
        let reqUrl = url;
        let reqData = dataHandler();

        if (reqMethod === 'GET') {
            if (reqData) {
                reqUrl += (reqUrl.indexOf('?') >= 0 ? '&' : '?') + reqData;
                reqData = null;
            }
            if (!isCache) {
                reqUrl += `${reqUrl.indexOf('?') >= 0 ? '&' : '?'}WQ_${+new Date()}=1`;
            }
        }

        if (reqMethod === 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        for (const key in headers) {
            if (Object.prototype.hasOwnProperty.call(headers, key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }

        xhr.onreadystatechange = stateChangeHandler;
        xhr.open(reqMethod, reqUrl, true);
        xhr.send(reqData);
    });

    return promise;
}

export default request;
