
/**
 * 防抖
 * @param {function} func 执行函数
 * @param {number} wait 等待时间
 * @param {boolean} immediate 是否立即执行函数
 */
function _debounce(func, wait=500, immediate=false) {
  let timeout;

  return function() {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)

    if (immediate) { // 立即执行
      const callNow = !timeout
      timeout = setTimeout(() => { timeout = null }, wait)
      if (callNow) func.apply(context, args)

    } else { // 非立即执行
      timeout = setTimeout(() => func.apply(context, args), wait)
    }
  }
}

module.exports = _debounce
