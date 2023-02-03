
/**
 * 获取对象多层嵌套的值
 * @param {object} obj 数据对象
 * @param {string|array} keys 多层嵌套的key值
 * @returns {any} obj下key对应的value值
 */
function _getDepthValue(obj, keys) {
  const list = !Array.isArray(keys) 
  ? keys.replace(/\[/g, '.').replace(/\]/g, '').split('.') 
  : keys
  return list.reduce((prev, curr) => (prev || {})[curr], obj) || ''
}

module.exports = _getDepthValue
