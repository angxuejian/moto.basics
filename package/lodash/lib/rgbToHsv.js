
// 防止出现 0 / 0 = NaN 情况出现
function isNaNIssue(v1, v2) {
  if (v1 === 0 && v2 === 0) return 0
  else return v1 / v2
}

/**
 * rgb转hsv
 * @param {number} r red 0 - 255
 * @param {number} g green 0 - 255
 * @param {number} b blue 0 - 255
 * @returns {object} { h: xx, s: xx, v: xx }
 */
function _rgbToHsv(r, g, b) {

  const [red, green, blue] = [r, g, b].map(n => n / 255)

  let h = 0
  let s = 0
  let v = 0

  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const l = max - min

 
  if (l === 0) h = 0
  else if (max === red) h = 60 * (isNaNIssue((green - blue), l) % 6)
  else if (max === green) h = 60 * (isNaNIssue((blue - red), l) + 2)
  else if (max === blue) h = 60 * (isNaNIssue((red - green), l) + 4)

  if (h < 0) h += 360
  s = l / max
  v = max


  const hsv = {
    h: Math.round(h),
    s: Number((s * 100).toFixed(1)),
    v: Number((v * 100).toFixed(1))
  }
  return hsv
}

module.exports = _rgbToHsv
// 转换公式：https://www.rapidtables.org/zh-CN/convert/color/rgb-to-hsv.html
