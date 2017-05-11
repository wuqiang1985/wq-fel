import getRawParamByUrl from './getRawParamByUrl';

/**
 * 获取url参数的编码后的值
 * @memberof url
 * @method url#getParamByUrl
 * @param  {string} name 参数名
 * @param  {string} [url]  页面url，默认取值：location.href
 * @return {string} 编码(encodeURIComponent)后参数的值
 */
function getParamByUrl(name, url = location.href) {
    return encodeURIComponent(getRawParamByUrl(name, url));
}

export default getParamByUrl;
