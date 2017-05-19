/**
 * 是否为微信
 * @memberof platform
 * @readonly
 * @instance
 * @property {boolean} isWeChat 是否为微信
 * @returns {boolean} 是否为微信
 */
const isWeChat = /micromessenger/i.test(navigator.userAgent);

export default isWeChat;
