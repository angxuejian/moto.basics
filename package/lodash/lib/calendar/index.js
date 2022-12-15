

const _Solar = require('./solar')

class _Calendar extends _Solar {

  constructor(date, isLunar = true) {
    super(isLunar)
    const d = new Date(date)
    this.year = d.getFullYear()
    this.month = d.getMonth() + 1
    this.day = d.getDate()
  }

  getDate() {
    return this.getSolarDate(this.year, this.month, this.day)
  }
}

module.exports = _Calendar
