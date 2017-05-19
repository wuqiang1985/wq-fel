/**
 * 对目标数字进行0补齐处理
 * @memberof number
 * @method number#pad
 * @param {number} source 需要处理的数字
 * @param {number} [length=2] 需要输出的长度
 * @returns {string} 对目标数字进行0补齐处理后的结果
 */
function pad(source, length = 2) {
    let pre = '';
    const negative = (source < 0);
    const string = String(Math.abs(source));

    if (string.length < length) {
        pre = (new Array(length - string.length + 1)).join('0');
    }

    return (negative ? '-' : '') + pre + string;
}

export default pad;
