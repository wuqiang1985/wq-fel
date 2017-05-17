import getRawCookie from './getRawCookie';

/**
 * 获取cookie值，用decodeURIComponent解码
 * @memberof cookie
 * @method cookie#getCookie
 * @param  {string} key cookie名
 * @return {string|null} cookie值，进行decodeURIComponent解码，未获取到返回null
 */
function getCookie(key) {
    const value = getRawCookie(key);

    if (typeof value === 'string') {
        return decodeURIComponent(value);
    }

    return null;
}

export default getCookie;
