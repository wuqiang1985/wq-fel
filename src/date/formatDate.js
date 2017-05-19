import pad from '../number/pad';

/**
 * 日期格式化
 * @memberof date
 * @method date#formatDate
 * @param {Date} source 日期对象
 * @param {string} [pattern=yyyy/MM/dd] 日期格式化模式
 * @example
 * <b>格式表达式，变量含义：</b><br><br>
 * hh: 带 0 补齐的两位 12 进制时表示<br>
 * h: 不带 0 补齐的 12 进制时表示<br>
 * HH: 带 0 补齐的两位 24 进制时表示<br>
 * H: 不带 0 补齐的 24 进制时表示<br>
 * mm: 带 0 补齐两位分表示<br>
 * m: 不带 0 补齐分表示<br>
 * ss: 带 0 补齐两位秒表示<br>
 * s: 不带 0 补齐秒表示<br>
 * yyyy: 带 0 补齐的四位年表示<br>
 * yy: 带 0 补齐的两位年表示<br>
 * MM: 带 0 补齐的两位月表示<br>
 * M: 不带 0 补齐的月表示<br>
 * dd: 带 0 补齐的两位日表示<br>
 * d: 不带 0 补齐的日表示
 * @returns {string} 格式化后的字符串
 */
function formatDate(source, pattern = 'yyyy/MM/dd') {
    let result = pattern;
    const year = source.getFullYear();
    const month = source.getMonth() + 1;
    const date2 = source.getDate();
    const hours = source.getHours();
    const minutes = source.getMinutes();
    const seconds = source.getSeconds();
    const replacer = function (patternPart, val) {
        result = result.replace(patternPart, val);
    };

    replacer(/yyyy/g, pad(year, 4));
    replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2));
    replacer(/MM/g, pad(month, 2));
    replacer(/M/g, month);
    replacer(/dd/g, pad(date2, 2));
    replacer(/d/g, date2);

    replacer(/HH/g, pad(hours, 2));
    replacer(/H/g, hours);
    replacer(/hh/g, pad(hours % 12, 2));
    replacer(/h/g, hours % 12);
    replacer(/mm/g, pad(minutes, 2));
    replacer(/m/g, minutes);
    replacer(/ss/g, pad(seconds, 2));
    replacer(/s/g, seconds);

    return result;
}

export default formatDate;
