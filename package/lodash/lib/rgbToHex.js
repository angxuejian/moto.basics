
function toHex(s) {
  // 将 0-255 转为 [0-9a-fA-F]
  let str = s.toString(16)
  return str.padStart(2, '0').toUpperCase()
}

/**
 * rgb转hex
 * @param {number} r red 0 - 255
 * @param {number} g green 0 - 255
 * @param {number} b blue 0 - 255
 * @returns {string} #xxxxxx
 */
function _rgbToHex(r, g, b) {

  return `#${ [r, g, b].map(n => toHex(n)).reduce((p, c) => p + c) }`
}

module.exports = _rgbToHex
