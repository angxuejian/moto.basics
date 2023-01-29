# _ImageMode(width, height, styleW, styleH)

## 功能描述
图片模式

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
width   | number |    |  是 | 图片自身宽度
height  | number |    |  是 | 图片自身高度
styleW  | number |    |  是 | 图片样式宽度
styleH  | number |    |  是 | 图片样式高度

## 绘制方法
返回值均以[ctx.drawImage()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage)函数的参数值返回，重新绘制图片大小

```
drawImage(image, dx, dy)
drawImage(image, dx, dy, dw, dh)
drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
```

名称 |  返回值 |  说明
---  | --- |---
getAspectFit | 	{ dx, dy, dw, dh }  |缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
getAspectFill | { dx, dy, dw, dh }	|缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
getTop | { sx, sy, sw, sh, dx, dy, dw, dh } |裁剪模式，不缩放图片，只显示图片的顶部区域
getBottom | { sx, sy, sw, sh, dx, dy, dw, dh }	|裁剪模式，不缩放图片，只显示图片的底部区域
getCenter | { sx, sy, sw, sh, dx, dy, dw, dh }	|裁剪模式，不缩放图片，只显示图片的中间区域
getLeft | { sx, sy, sw, sh, dx, dy, dw, dh }	|裁剪模式，不缩放图片，只显示图片的左边区域
getRight | { sx, sy, sw, sh, dx, dy, dw, dh }	|裁剪模式，不缩放图片，只显示图片的右边区域
getTopLeft | { sx, sy, sw, sh, dx, dy, dw, dh }	|裁剪模式，不缩放图片，只显示图片的左上边区域
getTopRight | { sx, sy, sw, sh, dx, dy, dw, dh } |裁剪模式，不缩放图片，只显示图片的右上边区域
getBottomLeft | { sx, sy, sw, sh, dx, dy, dw, dh }	|裁剪模式，不缩放图片，只显示图片的左下边区域
getBottomRight | { sx, sy, sw, sh, dx, dy, dw, dh } 	|裁剪模式，不缩放图片，只显示图片的右下边区域


## 样式缩放方法
固定宽度或高度样式，在保持原图宽高比例的情况下，计算出另一个方向大小，然后改变图片样式即可
名称 |  返回值 |  说明
---  | --- |---
getWidthFix | { height }	|缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
getHeightFix | { width } |缩放模式，高度不变，宽度自动变化，保持原图宽高比不变

## 示例
```js
import _ImageMode from '@angxuejian/lodash/ImageMode'
const canvas = document.getElementById('canvas')
const image = document.getElementById('image')
const ctx = canvas.getContext('2d')
const styleW = 151
const styleH = 240


// 绘制方法示例
const loadImg = new Image()
loadImg.src = 'xx/xx.png' // 图片地址
loadImg.onload = function(res) {
  const { width, height } = d.path[0]
  canvas.width = width
  canvas.height = height
  const ImageMode = new _ImageMode(width, height, styleW, styleH)
  const { sx, sy, sw, sh, dx, dy, dw, dh } = ImageModeo.getCenter()
  ctx.drawImage(im,  sx, sy, sw, sh, dx, dy, dw, dh)
  const src = canvas.toDataURL({format: 'image/png', quality:1, width:styleW, height:styleH })

  image.style = `width: ${styleW}px; height: ${styleH}px`
  image.src = src
}


// ===============================
// ===============================
// ===============================


// 样式缩放方法示例
const ImageMode = new _ImageMode(image.width, image.height, styleW, styleH)
const { height } = ImageMode.getWidthFix()
image.style.height = height
```