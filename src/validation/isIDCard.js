/**
 * 是否为身份证号码，支持15|18位
 * @memberof validation
 * @method validation#isIDCard
 * @param {string} cardNumber 身份证号码
 * @returns {boolean} 是否为合法身份证号码
 */
function isIDCard(cardNumber) {
    // 出生日期1800-2099
    // 15位校验规则 6位地址编码+6位出生日期+3位顺序号
    // 18位校验规则 6位地址编码+8位出生日期+3位顺序号+1位校验位
    return /^[1-9]\d{5}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]?$/.test(cardNumber);
}

export default isIDCard;
