
/**
 * 将驼峰命名转为脊柱命名
 * @param {string} str 驼峰命名
 * @returns {string} 脊柱命名
 */
function _toSpinalCase(str) {
  if (!str || typeof str !== 'string') return str;

  const list = str.split('')

  const caseArr = list.map(item => {
    if (item.toUpperCase() === item) return '-' + item.toLowerCase()
    else return item
  })

  let val = caseArr.join('')
  if (val[0] === '-') val = val.substring(1)
  return val
}


module.exports = _toSpinalCase
