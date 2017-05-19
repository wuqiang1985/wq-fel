import request from './request';

/**
 * 发送ajax GET请求script并执行
 * @memberof ajax
 * @method ajax#getScript
 * @param {string} url 请求的url
 * @param {string|object} [data=null]
 * 请求参数，e.g. string为查询字符串：lang=en&area=hk;
 * object: json对象，最终会被转化为查询字符串
 * @param {boolean} [isCache=false] 是否需要缓存
 * @example
 * // 简单调用，可参考get方法
 * getScript('http://www.joox.com/cgi');
 * @returns {Promise} 发送请求的Promise对象
 */
function getScript(url, data = null, isCache = false) {
    return request(url, {
        data,
        isCache,
        dataType: 'script',
    });
}

export default getScript;
