import request from './request';

/**
 * 发送ajax GET请求
 * @memberof ajax
 * @method ajax#get
 * @param {string} url 请求的url
 * @param {string|object} [data=null]
 * 请求参数，e.g. string为查询字符串：lang=en&area=hk;
 * object: json对象，最终会被转化为查询字符串
 * @param {boolean} [isCache=false] 是否需要缓存
 * @example
 * // 简单调用
 * get('http://www.joox.com/cgi').then(res => {
 *     successHandler(res);
 * }).catch(error => {
 *     failureHandler(error);
 * });
 *
 * // 带参数调用
 * get('http://www.joox.com/cgi', {
 *     lang: 'en',
 *     area: 'hk',
 * }).then(res => {
 *     successHandler(res);
 * }).catch(error => {
 *     failureHandler(error);
 * });
 *
 * // 带参数调用
 * get('http://www.joox.com/cgi', 'lang=en&area=hk').then(res => {
 *     successHandler(res);
 * }).catch(error => {
 *     failureHandler(error);
 * });
 * @returns {Promise} 发送请求的Promise对象
 */
function get(url, data = null, isCache = false) {
    return request(url, {
        data,
        isCache,
    });
}

export default get;
