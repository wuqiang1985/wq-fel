# WQ Web Front-end Library [![Build Status](https://travis-ci.org/wuqiang1985/wq-fel.svg?branch=master)](https://travis-ci.org/wuqiang1985/wq-fel) [![Coverage Status](https://coveralls.io/repos/github/wuqiang1985/wq-fel/badge.svg?branch=master)](https://coveralls.io/github/wuqiang1985/wq-fel?branch=master) [![npm version](https://img.shields.io/npm/v/wq-fel.svg?style=flat)](https://www.npmjs.com/package/wq-fel) [![license](https://img.shields.io/github/license/wuqiang1985/wq-fel.svg)]()
[![NPM](https://nodei.co/npm/wq-fel.png)](https://nodei.co/npm/wq-fel/)

## 安装
```
npm install wq-fel
```

## 用法
### 举个栗子，我们想调用encodeHtml
* 引入整体库
```javascript
import wq-fel from "wq-fel";
// call
wq-fel.string.encodeHtml('xx');
```
* 引入某个整体模块
```javascript
import string from "wq-fel/string";
// call
string.encodeHtml('xx');
```
* 引入某个具体某个方法
```javascript
import encodeHtml from "wq-fel/string/encodeHtml";
// call
encodeHtml('xx');
```

## 模块列表
* [ajax](src/ajax) ajax扩展库
* [array](src/array) array扩展库
* [cookie](src/cookie) cookie扩展库
* [date](src/date) 日期扩展库
* [dom](src/dom) dom扩展库
* [number](src/number) 数字扩展库
* [platform](src/platform) 平台扩展库
* [string](src/string) 字符串扩展库
* [url](src/url) url扩展库
* [validation](src/validation) 验证扩展库



