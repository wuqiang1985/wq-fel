import request from './request';

/**
 * 发送ajax GET请求
 * @memberof ajax
 * @method ajax#getScript
 * @param {string} url 发送请求的url
 * @param {Boolean} [isCache] 是否需要缓存，默认为false
 * @returns {Promise} 发送请求的Promise对象
 */
function getScript(url, isCache = false) {
    return request(url, {
        isCache,
        dataType: 'script',
    });
}

export default getScript;
