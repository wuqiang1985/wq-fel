import request from './request';

/**
 * 发送ajax GET请求JSON
 * @memberof ajax
 * @method ajax#getJSON
 * @param {string} url 请求的url
 * @param {string|object} [data=null]
 * 请求参数，e.g. string为查询字符串：lang=en&area=hk;
 * object: json对象，最终会被转化为查询字符串
 * @param {boolean} [isCache=false] 是否需要缓存
 * @example
 * // 简单调用，可参考get方法
 * getJSON('http://www.joox.com/cgi').then(res => {
 *     successHandler(res);
 * }).catch(error => {
 *     failureHandler(error);
 * });
 * @returns {Promise} 发送请求的Promise对象
 */
function getJSON(url, {
    data,
    isCache = false,
} = {}) {
    return request(url, {
        data,
        isCache,
        dataType: 'json',
    });
}

export default getJSON;
