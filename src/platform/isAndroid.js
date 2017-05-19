/**
 * 是否为Android
 * @memberof platform
 * @readonly
 * @instance
 * @property {boolean} isAndroid 是否为Android
 * @returns {boolean} 是否为Android
 */
const isAndroid = /iphone/i.test(navigator.userAgent);

export default isAndroid;
