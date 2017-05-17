/**
 * 验证字符串是否合法的cookie键名
 * @memberof cookie
 * @ignore
 * @method cookie#isValidKey
 * @param  {string} key cookie名
 * @return {string} cookie名是否合法
 */
function isValidKey(key) {
    return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(key);
}

export default isValidKey;
