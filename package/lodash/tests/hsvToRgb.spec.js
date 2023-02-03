const _hsvToRgb = require('../lib/hsvToRgb')

describe('hsvToRgb', () => {
  // https://www.rapidtables.org/zh-CN/convert/color/hsv-to-rgb.html 转换结果对比

  it('should be rgb', () => {
    expect(_hsvToRgb(15,40,39)).toBe('rgb(99,70,60)')
  })
})