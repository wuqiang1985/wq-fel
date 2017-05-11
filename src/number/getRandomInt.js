/**
 * 生成随机整数，范围是[min, max]
 * @memberof number
 * @method number#getRandomInt
 * @param   {number} min    随机整数的最小值
 * @param   {number} max    随机整数的最大值
 * @return  {number}        生成的随机整数
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default getRandomInt;
