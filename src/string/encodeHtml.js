/**
 * 对目标字符串进行html编码
 * @memberof string
 * @method string#encodeHtml
 * @param {string} source 目标字符串
 * @returns {string} html编码后的字符串
 */
function encodeHtml(source) {
    return String(source)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export default encodeHtml;
