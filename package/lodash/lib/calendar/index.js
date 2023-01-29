
const _Solar = require('./solar')

/**
 * 日期对象
 */
class _Calendar extends _Solar {

  constructor({ date = new Date(), isLunar = true } = {}) {
    super(isLunar) //是否显示阴历
    const d = date() // 日期
    this.year = d.getFullYear()
    this.month = d.getMonth() + 1
    this.day = d.getDate()
  }

  getDate() {
    return this.getSolarDate(this.year, this.month, this.day)
  }
}

module.exports = _Calendar
