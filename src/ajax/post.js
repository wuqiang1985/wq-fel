import request from './request';

/**
 * 发送ajax POST请求
 * @memberof ajax
 * @method ajax#post
 * @param {string} url 请求的url
 * @param {string|object} data
 * string: post的字符串数据;
 * object: post的json对象，最终会被转化为查询字符串
 * @example
 * // data为字符串调用
 * post('http://www.joox.com/cgi', 'lang=en').then(res => {
 *     successHandler(res);
 * }).catch(error => {
 *     failureHandler(error);
 * });
 *
 * // data为对象调用
 * post('http://www.joox.com/cgi', {lang: 'en'}).then(res => {
 *     successHandler(res);
 * }).catch(error => {
 *     failureHandler(error);
 * });
 * @returns {Promise} 发送请求的Promise对象
 */
function post(url, data) {
    return request(url, {
        method: 'POST',
        data,
    });
}

export default post;
