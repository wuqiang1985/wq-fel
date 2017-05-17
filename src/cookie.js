/**
 * cooikie扩展库
 * @namespace cookie
 */

import get from './cookie/getCookie';
import getRaw from './cookie/getRawCookie';
import set from './cookie/setCookie';
import setRaw from './cookie/setRawCookie';
import remove from './cookie/removeCookie';

export default {
    get,
    getRaw,
    set,
    setRaw,
    remove,
};
