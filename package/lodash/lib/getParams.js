
/**
 * 获取url中value值
 * @param {string} url 要解析的url地址
 * @param {string} key url地址中的key值
 * @returns {string} url中key对应的value值
 */
function _getParams(url, key) {
  if (!url) {
    url = window && window.location && window.location.href || ''
  }

  const reg = new RegExp(`(\\?|&)${key}=([^&]*)(&|$)`)
  const value = url.match(reg)
  return value ? value[2] : ''
}

module.exports = _getParams

// 正则表达式
// (\\?|&)：以 ?或& 开头的地方
// ([^&]*)：非 & 的字符串
// (&|$)：以 &或$ 结尾的地方
