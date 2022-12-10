
/**
 * canvas 绘制圆角矩形
 * @param {number} x 画布中圆角矩形所在的 x坐标
 * @param {number} y 画布中圆角矩形所在的 y坐标
 * @param {number} w 画布中圆角矩形的 宽度
 * @param {number} h 画布中圆角矩形的 高度
 * @param {number} r 画布中圆角矩形的 圆角角度
 * @param {object} ctx canvas画布对象
 */
function _drawRoundRect(x, y, w, h, r, ctx) {
  const minSize = Math.min(w, h)
  if (r > minSize / 2) r = minSize / 2

  const a = x + r // 起点
  const b = x + w // x坐标 + 宽度
  const c = y + h // y坐标 + 高度
  
  ctx.beginPath()
  ctx.moveTo(a, y)
  ctx.arcTo(b, y, b, c, r)
  ctx.arcTo(b, c, x, c, r)
  ctx.arcTo(x, c, x, y, r)
  ctx.arcTo(x, y, a, y, r)
  ctx.closePath()
}

module.exports = _drawRoundRect
