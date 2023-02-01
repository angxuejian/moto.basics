
const _Config = require('./config')

class _Lunar extends _Config {

  constructor() {
    super()
    this.SOLAR_TERMS = [] // 24节气日期对应表
  }

  getLunarDate(sy, sm, sd) {
    return this.solarToLunar(sy, sm - 1, sd)
  }

  /**
   * 阳历日期 转 阴历日期
   * @param {number} sy 阳历年
   * @param {number} sm 阳历月 0-11
   * @param {number} sd 阳历日
   * @returns {object} 阴历日期
   */
  solarToLunar(sy, sm, sd) {
    let ly, lm, ld;
    let diffNumber = (Date.UTC(sy, sm, sd) - Date.UTC(1949, 0, 29)) / (24 * 60 * 60 * 1000) + 1;

    // 阴历年
    for (let i = 0; i < this.LUNAR_YEAR_LIST.length; i++) {
      let lyBinary = this.decimalToBinary(this.LUNAR_YEAR_LIST[i])
      let yearNumber = this.getLunarYearNumber(lyBinary)

      diffNumber -= yearNumber

      if (diffNumber <= 0) {
        ly = 1949 + i
        diffNumber += yearNumber
        break;
      }
    }

    // 阴历月和日
    const lmBinary = this.decimalToBinary(this.LUNAR_YEAR_LIST[ly - 1949])
    const monthNumberArr = this.getLunarMonthNumber(lmBinary)
    for (let i = 0; i < monthNumberArr.length; i++) {
      diffNumber -= monthNumberArr[i]

      if (diffNumber <= 0) {
        if (monthNumberArr.length === 13) {
          let leapMonth = this.isLunarLeapMonth(lmBinary)
          if (leapMonth < i) lm = i
          else if (leapMonth === i) lm = `闰${leapMonth}`
          else lm = i + 1
          
        } else lm = i + 1
        
        ld = diffNumber += monthNumberArr[i]
        break
      }
    }

    return this.formatLunarDate(ly, lm, ld)
  }

  /**
   * 计算 某一阴历年的天数
   * @param {string} lyBinary 阴历年 2进制
   * @returns {number} lyBinary 年的天数
   */
  getLunarYearNumber(lyBinary) {
    let y = 0
    let year = this.getLunarMonthNumber(lyBinary)

    for (let i = 0; i < year.length; i++) { y += year[i] }
    return y
  }

  /**
   * 计算 该年每个月的天数
   * @param {string} lyBinary 阴历年 2进制
   * @returns {array} 每个月的天数
   */
  getLunarMonthNumber(lyBinary) {
    let m = []
    
    const list = Array.from(lyBinary.slice(lyBinary.length - 16, lyBinary.length - 4))
  
    for (let i = 0; i < list.length; i++) {
      m.push(Number(list[i]) ? 30 : 29)
    }

    // 是否有闰月 小月:29 | 大月:30
    const leapMonth = this.isLunarLeapMonth(lyBinary)
    if (leapMonth) {
      m.splice(leapMonth, 0, lyBinary.length > 16 ? 30 : 29)
    }
    return m
  }


  /**
   * 将数字日期 转为 阴历日期
   * @param {number} ly 阴历年
   * @param {number|string} lm 阴历月 1-12 | 1-13
   * @param {number} ld 阴历日
   * @returns {object} 阴历日期
   */
  formatLunarDate(ly, lm, ld) {
    let cy, cm, cd;
    let tg, dz, sx;
    let lunar = this.LUNAR_DATE_LIST;
    let lmm = lm;
    ld = ld.toString()

    if (ld >= 1 && ld <= 10) cd = `${lunar[10]}${lunar[ld - 1]}`
    else if (ld >= 11 && ld <= 19) cd = `${lunar[9]}${lunar[ld[1] - 1]}`
    else if (ld == 20 || ld == 30) cd = `${lunar[ld[0] - 1]}${lunar[9]}`
    else if (ld >= 21 && ld <= 29) cd = `${lunar[11]}${lunar[ld[1] - 1]}`
    
    cm = this.formatLunarCNMonth(lm)
    
    tg = this.TIAN_GAN[ly % 10]
    dz = this.DI_ZHI[ly % 12]
    sx = this.SHENG_XIAO[ly % 12]
    cy = `${tg}${dz}${sx}年`
    
    if (/闰/g.test(lm)) lmm = lm.splice('闰')[1]

    const key = `${this.padStart(lmm)}${this.padStart(ld)}`
    return {
      year: cy, month: cm, day: cd,
      value: `${cy} ${cm}${cd}`,
      festival: [this.LUNAR_FESTIVAL[key]].filter(s => s)
    }
  }

  /**
   * 将数字月份 转为 中文月份
   * @param {number|string} lm 阴历月
   * @returns {string} 中文月份
   */
  formatLunarCNMonth(lm) {
    let mm = '';
    lm = lm.toString()

    if (/^闰/ig.test(lm)) {
      lm = lm.substring(1)
      mm = '闰'
    }
    
    mm += `${this.LUNAR_MONTH_LIST[Number(lm) - 1]}月`
    return mm
  }


  /**
   * 10进制转2进制
   * @param {string} ly 阴历年 10进制
   * @returns {string} 阴历年 2进制
   */
  decimalToBinary(ly) {
    return this.padStart(ly.toString(2), 16)
  }

  /**
   * 判断是否该年份 是否有闰月
   * @param {string} lyBinary 阴历年 2进制
   * @returns {number} 如有闰月,返回月份索引; 否则为0
   */
  isLunarLeapMonth(lyBinary) {
    const m = lyBinary.slice(lyBinary.length - 4)
    return parseInt(m, 2)
  }

  padStart(n, number = 2) {
    n = n.toString()
    return n.padStart(number, 0)
  }
}

module.exports = _Lunar
