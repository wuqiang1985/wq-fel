/**
 * 字符串扩展类
 * @namespace string
 */

/**
 * 对目标字符串进行html编码
 * @memberof string
 * @method encodeHTML
 * @param {string} source 目标字符串
 * @returns {string} html编码后的字符串
 */
function encodeHTML(source) {
    return String(source)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * 对目标字符串进行html解码
 * @memberof string
 * @method decodeHTML
 * @param {string} source 目标字符串
 * @returns {string} html解码后的字符串
 */
function decodeHTML(source) {
    return String(source)
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&#39;/g, "'");
}

export {
    encodeHTML,
    decodeHTML,
};
