/**
 * 是否为移动端设备
 * @memberof platform
 * @readonly
 * @instance
 * @property {boolean} isMobile 是否为移动端设备
 * @returns {boolean} 是否为移动端设备
 */
const isMobile = !!navigator.userAgent.match(/android|webos|ip(hone|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i);

export default isMobile;
