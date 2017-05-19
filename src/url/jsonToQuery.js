/**
 * 将JSON转化为querystrig形式
 * @memberof url
 * @method url#jsonToQuery
 * @param  {object} obj json对象
 * @return {string} json对象转换为querystring字符串
 */
function jsonToQuery(obj) {
    const queryStr = [];
    Object.keys(obj).map((key) => {
        queryStr.push(`${key}=${obj[key]}`);
    });

    return queryStr.join('&');
}

export default jsonToQuery;
