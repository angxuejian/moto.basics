
const _rgbToHex = require('../lib/rgbToHex')

describe('rgbToHex', () => {
  // https://www.sioe.cn/yingyong/yanse-rgb-16/ 转换结果对比
  it('should be hex', () => {
    expect(_rgbToHex(50, 50, 50)).toBe('#323232')
  })
})
