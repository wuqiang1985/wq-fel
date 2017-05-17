import isValidKey from './isValidKey';

/**
 * 获取cookie原始值
 * @memberof cookie
 * @method cookie#getRawCookie
 * @param  {string} key cookie名
 * @return {string|null} cookie原始值，未获取到返回null
 */
function getRawCookie(key) {
    if (isValidKey(key)) {
        const reg = new RegExp(`(^| )${key}=([^;]*)(;|\x24)`);
        const result = reg.exec(document.cookie);

        if (result) {
            return result[2] || null;
        }
    }

    return null;
}

export default getRawCookie;
