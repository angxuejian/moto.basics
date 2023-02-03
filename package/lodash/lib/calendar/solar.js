
const _Lunar = require('./lunar')

class _Solar extends _Lunar {
  constructor(isLunar = true) {
    super()
    this.isLunar = isLunar // 是否计算阴历
  }

  /**
   * 获取阳历日期
   * @param {number} sy 阳历年
   * @param {number} sm 阳历月 1 - 12
   * @param {number} sd 阳历日
   * @returns {object} 阴阳历日期
   */
  getSolarDate(sy, sm, sd) {
    return this.formatSolarDate(sy, sm, sd)
  }

  formatSolarDate(sy, sm, sd) {
    let smm = this.padStart(sm)
    let sdd = this.padStart(sd)

    const key = `${smm}${sdd}`
    let solar = {
      year: sy, month: smm, day: sdd,
      value: `${sy}-${sm}-${sd}`,
      festival: [this.SOLAR_FESTIVAL[key]].filter(s => s),
      // solarTerms: [this.SOLAR_TERMS[key]].filter(s => s)
    }

    let date = { solar }
    if (this.isLunar) date.lunar = this.getLunarDate(sy, sm, sd)

    return date
  }

  /**
   * 判断该年2月份 是否有闰年；闰年29天, 非闰年28天
   * @param {number} sy 阳历年
   */
  isSolarLeapMonth(sy) {
    if ((sy % 4 === 0 && sy % 100 !== 0) || sy % 400 === 0) {
      this.MONTH[1] = 29
    }
  }

  // /**
  //  * 获取节气对应表
  //  * @param {number} sy 
  //  */
  // getSolarTerms(sy) {
  //   const seconds = 31556925974.7 //31556925974.7为地球公转周期，是毫秒
  //   const baseYear = 1890 // 1890年为基准点
  //   const baseDate = Date.UTC(1890, 0, 5, 16, 2, 31) // 1890年的正小寒点：01-05 16:02:31

  //   /**
  //    * 计算 节气 日
  //    * @param {number} y 阳历年份
  //    * @param {number} i 0-23节气 分钟时间索引
  //    * @returns {number} 日 
  //    */
  //   const getDate = (y, i) => {
  //     let date = new Date((seconds * (y - baseYear) + this.SOLAR_TERMS_TIME[i] * 60000) + baseDate);
  //     return date.getUTCDate()
  //   }

  //   let terms = {}
  //   let m = 0 // 阴阳历 月
  //   let d = 0 // 阴阳历 日

  //   for (let i = 0; i < 24; i++) {
  //     d = getDate(sy, i);
  //     if (i % 2 == 0) m++
  //     terms[`${this.padStart(m)}${this.padStart(d)}`] = this.SOLAR_TERMS_CN[i]
  //   }

  //   this.SOLAR_TERMS = terms
  // }
}

module.exports = _Solar
