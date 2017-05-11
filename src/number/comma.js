/**
 * 为目标数字添加逗号分隔
 * @memberof number
 * @method number#comma
 * @param {number} source 需要处理的数字
 * @param {number} [length] 两次逗号之间的数字位数，默认为3位
 * @returns {string} 添加逗号分隔后的字符串
 */
function comma(source, length = 3) {
    const num = String(source).split('.');
    num[0] = num[0].replace(new RegExp(`(\\d)(?=(\\d{${length}})+$)`, 'ig'), '$1,');
    return num.join('.');
}

export default comma;
