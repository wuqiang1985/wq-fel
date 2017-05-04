/**
 * 数字扩展库
 * @namespace number
 */

/**
 * 生成随机整数，范围是[min, max]
 * @memberof number
 * @method getRandomInt
 * @param   {number} min    随机整数的最小值
 * @param   {number} max    随机整数的最大值
 * @return  {number}        生成的随机整数
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 对目标数字进行0补齐处理
 * @memberof number
 * @method pad
 * @param {number} source 需要处理的数字
 * @param {number} length 需要输出的长度
 * @returns {string} 对目标数字进行0补齐处理后的结果
 */
function pad(source, length) {
    let pre = '';
    const negative = (source < 0);
    const string = String(Math.abs(source));

    if (string.length < length) {
        pre = (new Array(length - string.length + 1)).join('0');
    }

    return (negative ? '-' : '') + pre + string;
}

/**
 * 为目标数字添加逗号分隔
 * @memberof number
 * @method comma
 * @param {number} source 需要处理的数字
 * @param {number} [length] 两次逗号之间的数字位数，默认为3位
 * @returns {string} 添加逗号分隔后的字符串
 */
function comma(source, length = 3) {
    const num = String(source).split('.');
    num[0] = num[0].replace(new RegExp(`(\\d)(?=(\\d{${length}})+$)`, 'ig'), '$1,');
    return num.join('.');
}

export {
    getRandomInt,
    pad,
    comma,
};
