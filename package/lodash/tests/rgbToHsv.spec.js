

const _rgbToHsv = require('../lib/rgbToHsv')

describe('rgbToHsv', () => {

  // https://www.rapidtables.org/zh-CN/convert/color/rgb-to-hsv.html 转换结果对比


  it('should be max === min', () => {
    expect(_rgbToHsv(50,50,50)).toEqual({ h:0, s:0, v:19.6 })
  })

  it('should be max === red', () => {
    expect(_rgbToHsv(100,70,60)).toEqual({ h:15, s:40, v:39.2 })
  })

  it('should be max === green', () => {
    expect(_rgbToHsv(50,150,50)).toEqual({ h:120, s:66.7, v:58.8 })
  })

  it('should be max === blue', () => {
    expect(_rgbToHsv(50,50,100)).toEqual({ h:240, s:50, v:39.2 })
  })

  it('NaN should be 0', () => {
    expect(_rgbToHsv(100,100,100)).toEqual({ h:0, s:0, v:39.2 })
  })
})
