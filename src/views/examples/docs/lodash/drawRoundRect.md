# _drawRoundRect(x, y, w, h, r, ctx)

## 功能描述
canvas 绘制圆角矩形

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
x | number |  | 是 | 画布中圆角矩形所在的 x坐标
y | number |  | 是 | 画布中圆角矩形所在的 y坐标
w | number |  | 是 | 画布中圆角矩形的 宽度
h | number |  | 是 | 画布中圆角矩形的 高度
r | number |  | 是 | 画布中圆角矩形的 圆角角度
ctx | object |  | 是 | canvas画布对象



## 示例
```js
import _drawRoundRect from '@angxuejian/lodash/drawRoundRect'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// 在坐标(0,0)的位置，绘制(宽100,高100)，(圆角10)的矩形
_drawRoundRect(0, 0, 100, 100, 10, ctx)
```