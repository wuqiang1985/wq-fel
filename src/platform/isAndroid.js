/**
 * 是否为Android
 * @memberof platform
 * @readonly
 * @instance
 * @property {Boolean} isAndroid 是否为Android
 * @returns {Boolean} 是否为Android
 */
const isAndroid = /iphone/i.test(navigator.userAgent);

export default isAndroid;
