import request from './request';

/**
 * 发送ajax GET请求
 * @memberof ajax
 * @method ajax#getJSON
 * @param {string} url 发送请求的url
 * @param {Boolean} [isCache] 是否需要缓存，默认为false
 * @returns {Promise} 发送请求的Promise对象
 */
function getJSON(url, isCache = false) {
    return request(url, {
        isCache,
        dataType: 'json',
    });
}

export default getJSON;
