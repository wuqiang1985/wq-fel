import getRawParamByUrl from './getRawParamByUrl';

/**
 * 获取url参数的编码后的值
 * @memberof url
 * @see url#getRawParamByUrl
 * @method url#getParamByUrl
 * @param  {string} name 参数名
 * @param  {string} [url]  页面url，默认取值：location.href
 * @return {string|null} 编码(encodeURIComponent)后参数的值，未获取到返回null
 */
function getParamByUrl(name, url = location.href) {
    const value = getRawParamByUrl(name, url);

    if (typeof value === 'string') {
        return encodeURIComponent(value);
    }

    return null;
}

export default getParamByUrl;
