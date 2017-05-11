/**
 * 对目标字符串进行html解码
 * @memberof string
 * @method string#decodeHtml
 * @param {string} source 目标字符串
 * @returns {string} html解码后的字符串
 */
function decodeHtml(source) {
    return String(source)
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&#39;/g, "'");
}

export default decodeHtml;
