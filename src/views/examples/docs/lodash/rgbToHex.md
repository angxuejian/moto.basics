# _rgbToHex(r, g, b)

## 功能描述
rgb转hex

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
r | number | | 是 | red 0 - 255
g | number | | 是 | green 0 - 255
b | number | | 是 | blue 0 - 255

## 返回

类型 | 说明
---  | ---
string | #xxxxxx


## 示例
```js
import _rgbToHex from '@angxuejian/lodash/rgbToHex'

const hex = _rgbToHex(50,50,50)
```