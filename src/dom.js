/**
 * DOM扩展库
 * @namespace dom
 */

import 'element-closest';
import $ from 'balajs';


/**
 * 获取css计算属性值
 *
 * @param {htmlElement} el
 * @param {string} styleProp
 * @returns {string} 元素样式值
 */
function getStyle(el, styleProp) {
    let value;
    let stylePropArg;
    const defaultView = (el.ownerDocument || document).defaultView;

    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        stylePropArg = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(stylePropArg);
    } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        stylePropArg = styleProp.replace(/\-(\w)/g, (str, letter) => letter.toUpperCase());
        value = el.currentStyle[stylePropArg];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return ((val) => {
                const oldLeft = el.style.left;
                const oldRsLeft = el.runtimeStyle.left;
                let valArg = val;

                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = valArg || 0;
                valArg = `${el.style.pixelLeft}px`;
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;

                return valArg;
            })(value);
        }

        return value;
    }

    return value;
}

Object.assign($.fn, {

    /**
     * 添加子元素
     * @memberof dom
     * @method dom#append
     * @param {HTMLElement} htmlElement htmlElement
     * @returns {Array}
     */
    append($htmlElement) {
        this.forEach(($element) => {
            $element.appendChild($htmlElement);
        });

        return this;
    },

    /**
     * 移除元素
     * @memberof dom
     * @method dom#remove
     * @returns {Array}
     */
    remove() {
        this.forEach(($element) => {
            $element.parentNode.removeChild($element);
        });

        return this;
    },

    /**
     * 添加css类
     * @memberof dom
     * @method dom#addClass
     * @param {string} className css类名
     * @returns {Array}
     */
    addClass(className) {
        this.forEach(($element) => {
            // http://caniuse.com/#search=classList
            $element.classList.add(className);
        });

        return this;
    },

    /**
     * 移除css类
     * @memberof dom
     * @method dom#removeClass
     * @param {string} className css类名
     * @returns {Array}
     */
    removeClass(className) {
        this.forEach(($element) => {
            // http://caniuse.com/#search=classList
            $element.classList.remove(className);
        });

        return this;
    },

    /**
     * 查找元素
     * @memberof dom
     * @method dom#find
     * @param {string} selector css选择器语法
     * @returns {Array}
     */
    find(selector) {
        return $(selector, this);
    },

    /**
     * 获取指定索引元素
     * @memberof dom
     * @method dom#eq
     * @param {number} index 索引值
     * @returns {Array}
     */
    eq(index) {
        return $(this[index]);
    },

    /**
     * 获取指定元素索引
     * @memberof dom
     * @method dom#index
     * @returns {number}
     */
    index() {
        const $element = this[0];
        const $parent = $element.parentNode;

        return Array.prototype.indexOf.call($parent.children, $element);
    },

    /**
     * 显示元素
     * @memberof dom
     * @method dom#show
     * @returns {Array}
     */
    show() {
        this.forEach(($element) => {
            $element.style.display = 'block';
        });

        return this;
    },

    /**
     * 隐藏元素
     * @memberof dom
     * @method dom#hide
     * @returns {Array}
     */
    hide() {
        this.forEach(($element) => {
            $element.style.display = 'none';
        });

        return this;
    },

    /**
     * 绑定事件
     * @memberof dom
     * @method dom#on
     * @param {string} eventType 事件类型
     * @param {string|function} selector 用作事件委托，则为css选择器，否则则为事件处理方法
     * @param {function} handler 事件处理方法
     * @example
     * // 简单模式
     * $ele.on('click', handler);
     * // 事件委托模式
     * $ele.on('click', '.btn', handler);
     * // 绑定多个事件
     * $ele.on('click foucs', handler);
     * @returns {Array}
     */
    on(eventType, selector, handler) {
        const isDelegate = typeof selector === 'string' && typeof handler === 'function';
        let handlerArg = handler;

        if (!isDelegate) {
            handlerArg = selector;
        }

        this.forEach(($element) => {
            eventType.split(' ').forEach((event) => {
                $element.addEventListener(event, function (evt) {
                    if (isDelegate) {
                        // http://caniuse.com/#search=closest
                        if (this.contains(evt.target.closest(selector))) {
                            handlerArg.call(evt.target, evt);
                        }
                    } else {
                        handlerArg.call(this, evt);
                    }
                });
            });
        });

        return this;
    },

    /**
     * 解除绑定事件
     * @memberof dom
     * @method dom#off
     * @param {string} eventType 事件类型
     * @param {string|function} selector 用作事件委托，则为css选择器，否则则为事件处理方法
     * @param {function} handler 事件处理方法
     * @example
     * // 简单模式
     * $ele.off('click', handler);
     * // 事件委托模式
     * $ele.off('click', '.btn', handler);
     * @returns {Array}
     */
    off(eventType, selector, handler) {
        let handlerArg = handler;
        let selectorArg = selector;

        if (typeof selector === 'function') {
            handlerArg = selector;
            selectorArg = null;
        }

        this.forEach(($element) => {
            eventType.split(' ').forEach((event) => {
                if (typeof selectorArg === 'string') {
                    $element.querySelectorAll(selectorArg).forEach(($elem) => {
                        $elem.removeEventListener(event, handlerArg);
                    });
                } else {
                    $element.removeEventListener(event, handlerArg);
                }
            });
        });

        return this;
    },

    /**
     * 解除绑定事件(因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener)
     * @memberof dom
     * @method dom#offAll
     * @returns {Array}
     */
    offAll() {
        this.forEach(($element, index) => {
            const clone = $element.cloneNode(true);
            $element.parentNode.replaceChild(clone, $element);

            this[index] = clone;
        });

        return this;
    },

    /**
     * 获取或设置元素值
     * @memberof dom
     * @method dom#val
     * @param {any} [args] htmlElement值
     * @returns {Array|string}
     */
    val(...args) {
        if (args.length) {
            this.forEach(($element) => {
                $element.value = args[0];
            });

            return this;
        }

        return this[0].value;
    },

    /**
     * 获取或设置元素innerHTML
     * @memberof dom
     * @method dom#html
     * @param {string} [html] html字符串
     * @returns {Array|string}
     */
    html(...html) {
        if (html.length) {
            this.forEach(($element) => {
                $element.innerHTML = html[0];
            });

            return this;
        }

        return this[0].innerHTML;
    },

    /**
     * 获取或设置元素样式值
     * @memberof dom
     * @method dom#css
     * @param {string|object} args htmlElement样式
     * @example
     * // 获取元素样式值，遵从js样式设置规则如：backgroundColor
     * $ele.css('backgroundColor');
     * // 设置元素样式值-简单模式，遵从js样式设置规则如：backgroundColor
     * $ele.css('backgroundColor', 'red');
     * // 设置元素样式值-对象模式，遵从css样式设置规则如：background-color
     * $ele.css({'background-color': 'red'});
     * @returns {Array|string}
     */
    css(...args) {
        const firstArg = args[0];

        if (typeof firstArg === 'object') {
            const that = this;
            Object.keys(firstArg).forEach((key) => {
                that.forEach(($element) => {
                    $element.style[key] = firstArg[key];
                });
            });

            return this;
        }

        if (typeof firstArg === 'string' && args.length === 1) {
            return getStyle(this[0], firstArg);
        }

        this.forEach(($element) => {
            $element.style[firstArg] = args[1];
        });

        return this;
    },

    /**
     * 获取或设置元素属性
     * @memberof dom
     * @method dom#attr
     * @param {string|object} args htmlElement属性
     * @example
     * // 获取属性值
     * $ele.attr('xx');
     * // 设置属性值-简单模式
     * $ele.attr('xx', 'yy');
     * // 设置属性值-对象模式
     * $ele.attr({'xx': 'yy'});
     * @returns {Array|string}
     */
    attr(...args) {
        const firstArg = args[0];

        if (typeof firstArg === 'object') {
            const that = this;
            Object.keys(firstArg).forEach((attr) => {
                that.forEach(($element) => {
                    $element.setAttribute(attr, firstArg[attr]);
                });
            });

            return this;
        }

        if (typeof firstArg === 'string' && args.length === 1) {
            return this[0].getAttribute(firstArg);
        }

        this.forEach(($element) => {
            $element.setAttribute(firstArg, args[1]);
        });

        return this;
    },
});

Object.assign($, {
    /**
     * 渲染模板
     * @memberof dom
     * @method dom#render
     * @param {string} tpl html模板字符串，取值：<%= variable %> 表达式：<% if {} %>
     * @param {object} data JSON数据对象
     * @returns {string} 渲染后的html代码
     */
    render(tpl, data) {
        const code = `var p=[];with(this){p.push('${
            tpl
                .replace(/[\r\t\n]/g, ' ')
                .split('<%')
                .join('\t')
                .replace(/((^|%>)[^\t]*)'/g, '$1\r')
                .replace(/\t=(.*?)%>/g, '\',$1,\'')
                .split('\t')
                .join('\');')
                .split('%>')
                .join('p.push(\'')
                .split('\r')
                .join('\\\'')
             }');}return p.join('');`;

        return new Function(code).apply(data);
    },
});

export default $;
