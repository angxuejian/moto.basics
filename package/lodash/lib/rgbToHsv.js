
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

  const [red, green, blue] = [r, g, b].map(n / 255)

  let h = 0
  let s = 0
  let v = 0

  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const l = max - min

  v = max
  s = l / max
  const list = {
    [red]: isNaNIssue((green - blue), l) + (g < b ? 6 : 0),
    [green]: 2 + isNaNIssue((blue - red), l),
    [blue]:  4 + isNaNIssue((red - green), l),
  }

  h = list[max] / 6
  if (h < 0) h + 360

  const hsv = {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  }

  return hsv
}

module.exports = _rgbToHsv
