/**
 * 是否为Email
 * @memberof validation
 * @method validation#isEmail
 * @param {string} email email地址
 * @returns {Boolean} 是否为合法Email
 */
function isEmail(email) {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email);
}

export default isEmail;
