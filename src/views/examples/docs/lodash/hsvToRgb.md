# _hsvToRgb(h,s,v)

## 功能描述
hsv转rgb

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
h | number | | 是 | 色调 0 - 360
s | number | | 是 | 饱和度 0 - 100
v | number | | 是 | 明度 0 - 100

## 返回

类型 | 说明
---  | ---
string | rgb(xx, xx, xx)


## 示例
```js
import _hsvToRgb from '@angxuejian/lodash/hsvToRgb'

const rgb = _hsvToRgb(50,50,50)
```