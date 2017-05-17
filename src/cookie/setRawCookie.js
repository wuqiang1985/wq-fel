import isValidKey from './isValidKey';

/**
 * 设置cookie原始值
 * @memberof cookie
 * @method cookie#setRawCookie
 * @param  {string} key cookie名
 * @param  {string} value cookie值
 * @param  {object} [options] 默认为空对象
 * cookie选项值，e.g. {path：string, expires:number(毫秒值), domain:string, serue:boolean}
 */
function setRawCookie(key, value, options = {}) {
    if (!isValidKey(key)) {
        return;
    }

    let expires = options.expires;
    if (typeof expires === 'number') {
        expires = new Date();
        expires.setTime(expires.getTime() + options.expires);
    }

    document.cookie =
        `${key}=${value
         }${options.path ? `; path=${options.path}` : ''
         }${expires ? `; expires=${expires.toUTCString()}` : ''
         }${options.domain ? `; domain=${options.domain}` : ''
         }${options.secure ? '; secure' : ''}`;
}

export default setRawCookie;
