import request from './request';

/**
 * 发送ajax post请求
 * @memberof ajax
 * @method ajax#post
 * @param {string} url 发送请求的url
 * @param {string} data 发送的数据
 * @returns {Promise} 发送请求的Promise对象
 */
function post(url, data) {
    return request(url, {
        data,
    });
}

export default post;
