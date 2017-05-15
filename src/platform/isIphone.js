/**
 * 是否为iPhone
 * @memberof platform
 * @readonly
 * @instance
 * @property {Boolean} isIphone 是否为iPhone
 * @returns {Boolean} 是否为iPhone
 */
const isIphone = /iphone/i.test(navigator.userAgent);

export default isIphone;
