import setRawCookie from './setRawCookie';

/**
 * 设置cookie值，对cookie值进行encodeURIComponent
 * @memberof cookie
 * @method cookie#setCookie
 * @param  {string} key cookie名
 * @param  {string} value cookie值
 * @param  {object} [options] 默认为空对象
 * cookie选项值，e.g. {path：string, expires:number(毫秒值), domain:string, serue:boolean}
 */
function setCookie(key, value, options) {
    setRawCookie(key, encodeURIComponent(value), options);
}

export default setCookie;
