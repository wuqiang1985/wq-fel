
/**
 * 过滤数组，等到数组内唯一值
 * @memberof array
 * @method array#getUniqueArray
 * @param {array} arr 待过滤的数组
 * @returns {array} 过滤后唯一值的数组
 */
function getUniqueArray(arr) {
    return new Set(...arr);
}

export default getUniqueArray;
