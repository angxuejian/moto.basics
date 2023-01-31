

const _rgbToHsv = require('../lib/rgbToHsv')

describe('rgbToHsv', () => {

  // https://www.rapidtables.org/zh-CN/convert/color/rgb-to-hsv.html 转换结果对比
  it('should be hsv', () => {
    expect(_rgbToHsv(100,70,60)).toEqual({h:15,s:40,v:39.2})
  })
})
