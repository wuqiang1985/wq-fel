/**
 * 获取url参数的原始值
 * @memberof url
 * @method url#getRawParamByUrl
 * @param  {string} name 参数名
 * @param  {string} [url]  页面url，默认取值：location.href
 * @return {string} 参数的原始值
 */
function getRawParamByUrl(name, url = location.href) {
    const regex = new RegExp(`(\\?|#|&)${name}=([^&#\\?]*)(&|#|$|\\?)`, 'i');
    const match = url.match(regex);

    return (!match ? '' : match[2]);
}

export default getRawParamByUrl;
