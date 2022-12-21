# 安装/使用


## npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```shell
npm install @angxuejian/lodash --save
```

## 使用

在需要使用的 js文件中引用即可

全部引用
```js
import _lodash from '@angxuejian/lodash'
// or
const _lodash = require('@angxuejian/lodash')
```

按需引用

在默认 **@angxuejian/lodash**路径后加入引入方法的名称即可
```js
import _isTypeOf from '@angxuejian/lodash/isTypeOf'
// or
const _isTypeOf = require('@angxuejian/lodash/isTypeOf')
```

## 全部方法
所有方法前缀都有 **_** 下划线

function | desc
---  | ---  
[_isTypeOf](#/docs/lodash/isTypeOf) | 判断类型是否一致