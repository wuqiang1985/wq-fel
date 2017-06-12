/**
 * 是否为手机号码
 * @memberof validation
 * @method validation#isCellphoneNumber
 * @param {string} phoneNumber 手机号码
 * @returns {boolean} 是否为手机号码
 */
function isCellphoneNumber(phoneNumber) {
    // 匹配1[3|4|5|8]\d{9}
    // 匹配17[^249]\d{8}
    // 匹配规则参考：http://baike.baidu.com/item/%E6%89%8B%E6%9C%BA%E5%8F%B7
    return /^1([3458]\d{9}|7[^249]\d{8})$/.test(phoneNumber);
}

export default isCellphoneNumber;
