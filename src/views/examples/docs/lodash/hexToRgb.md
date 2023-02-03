# _hexToRgb(hex)

## 功能描述
hex转rgb

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
hex | string | | 是 | #7ecf70 16进制颜色代码

## 返回

类型 | 说明
---  | ---
string | rgb(xx, xx, xx)


## 示例
```js
import _hexToRgb from '@angxuejian/lodash/hexToRgb'

const rgb = _hexToRgb('#7ecf70')
```