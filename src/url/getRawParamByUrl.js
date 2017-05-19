/**
 * 获取url参数的原始值
 * @memberof url
 * @method url#getRawParamByUrl
 * @param  {string} name 参数名
 * @param  {string} [url=location.href]  页面url
 * @return {string|null} 参数的原始值，为获取到返回null
 */
function getRawParamByUrl(name, url = location.href) {
    const regex = new RegExp(`(\\?|#|&)${name}=([^&#\\?]*)(&|#|$|\\?)`, 'i');
    const match = url.match(regex);

    return (!match ? null : match[2]);
}

export default getRawParamByUrl;
