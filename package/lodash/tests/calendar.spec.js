const _Calendar = require('../lib/calendar')

describe('Clendar', () => {

  it('get solar date', () => {
    const Calendar = new _Calendar({ isLunar: false })
    const { solar } = Calendar.getDate()
    const d = new Date()
    const val = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-')
    expect(solar.value).toBe(val)
  })

  it('get solar festival', () => {
    const Calendar = new _Calendar({ date: new Date('2023-10-1'), isLunar: false })
    const { solar } = Calendar.getDate()
    expect(solar.festival[0]).toBe('国庆节')
  })

  it('sholud be 29 day', () => {
    const Calendar = new _Calendar({ date: new Date('2024-2-1'), isLunar: false })
    Calendar.getDate()
    expect(Calendar.MONTH[1]).toBe(29)
  })

  it('get lunar date', () => {
    const Calendar = new _Calendar({ date: new Date('2024-2-9') })
    const { lunar } = Calendar.getDate()
    expect(lunar.value).toBe('癸卯兔年 腊月三十')
  })

  it('get lunar festival', () => {
    const Calendar = new _Calendar({ date: new Date('2024-2-9') })
    const { lunar } = Calendar.getDate()
    expect(lunar.festival[0]).toBe('除夕')
  })
})