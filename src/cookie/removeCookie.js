import setRawCookie from './setRawCookie';

/**
 * 删除cookie值
 * @memberof cookie
 * @method cookie#removeCookie
 * @param  {string} key cookie名
 * @param  {object} [options] 默认为空对象
 * cookie选项值，e.g. {path：string, domain:string, serue:boolean}
 */
function removeCookie(key, options = {}) {
    options.expires = new Date(0);
    setRawCookie(key, '', options);
}

export default removeCookie;
