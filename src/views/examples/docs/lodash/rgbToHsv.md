# _rgbToHsv(r, g, b)

## 功能描述
rgb转hsv

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
r | number | | 是 | red 0 - 255
g | number | | 是 | green 0 - 255
b | number | | 是 | blue 0 - 255

## 返回

类型 | 说明
---  | ---
object | { h: xx, s: xx, v: xx }


## 示例
```js
import _rgbToHsv from '@angxuejian/lodash/rgbToHsv'

const hsv = _rgbToHsv(50,50,50)
```