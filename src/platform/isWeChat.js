/**
 * 是否为微信
 * @memberof platform
 * @readonly
 * @instance
 * @property {Boolean} isWeChat 是否为微信
 * @returns {Boolean} 是否为微信
 */
const isWeChat = /micromessenger/i.test(navigator.userAgent);

export default isWeChat;
