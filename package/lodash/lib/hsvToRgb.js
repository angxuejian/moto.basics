
/**
 * hsv转rgb
 * @param {number} h 色调 0 - 360
 * @param {number} s 饱和度 0 - 100
 * @param {number} v 明度 0 - 100
 * @returns {string} rgb(xx, xx, xx)
 */
function _hsvToRgb(h, s, v) {

  s = s / 100
  v = v / 100
  
  const i = parseInt(h / 60),
    f = h / 60 - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s);

  const list = [
    [v, t, p],
    [q, v, p],
    [p, v, t],
    [p, q, v],
    [t, p, v],
    [v, p, q]
  ]

  // 依次 n*255 后 转为rgb 0-255 的范围 [0-255, 0-255, 0-255]
  const rgb = list[i % 6].map(n => Math.round(n * 255))
  return `rgb(${rgb.join()})`
}
module.exports = _hsvToRgb
// 转换公式： https://www.rapidtables.org/zh-CN/convert/color/hsv-to-rgb.html