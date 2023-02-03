
/**
 * hex转rgb
 * @param {string} hex #7ecf70 16进制颜色代码
 * @returns {string} rgb(xx, xx, xx)
 */
function _hexToRgb(hex) {

  hex = hex.replace(/\s*/g, '')
  if (!/^#[0-9a-fA-F]{6}/g.test(hex)) return '';

  const h = hex.substring(1, 3)
  const e = hex.substring(3, 5)
  const x = hex.substring(5, 7)

  // 将 [0-9a-fA-F] 转为 0-255
  const rgb = [h, e, x].map(n => parseInt(n, 16))
  return `rgb(${rgb.join()})`
}

module.exports = _hexToRgb
