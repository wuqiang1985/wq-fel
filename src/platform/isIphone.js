/**
 * 是否为iPhone
 * @memberof platform
 * @readonly
 * @instance
 * @property {boolean} isIphone 是否为iPhone
 * @returns {boolean} 是否为iPhone
 */
const isIphone = /iphone/i.test(navigator.userAgent);

export default isIphone;
