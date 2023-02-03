
const _rgbToHex = require('../lib/rgbToHex')

describe('rgbToHex', () => {
  // https://www.sioe.cn/yingyong/yanse-rgb-16/ 转换结果对比
  it('should be hex', () => {
    expect(_rgbToHex(100, 70, 60)).toBe('#64463C')
  })
})
