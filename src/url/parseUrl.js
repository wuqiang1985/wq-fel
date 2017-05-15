/**
 * 解析url
 * @memberof url
 * @method url#parseUrl
 * @param  {string} url url链接字符串
 * @return {Object} url解析后的json对象
 */
function parseUrl(url) {
    const match = url.match(/^(https?:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        href: url,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7],
    };
}

export default parseUrl;
