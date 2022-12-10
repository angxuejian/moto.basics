
/**
 * 判断类型是否一致
 * @param {any} value 需要判断类型的值 
 * @param {string} type 期望类型
 * @returns {boolean}
 */
function _isTypeOf(value, type) {
  if (!value || !type || typeof type !== 'string') return;

  const list = type.split('')
  list.splice(0, 1, list[0].toUpperCase())

  const vv = Object.prototype.toString.call(value)
  const tt = `[object ${list.join('')}]`

  if (vv === tt) return true
  else return false
}

module.exports = _isTypeOf

// [object Null]
// [object Array]
// [object String]
// [object Number]
// [object Object]
// [object Boolean]
// [object Function]
// [object Undefined]
// [object Date]
// [object RegExp]
