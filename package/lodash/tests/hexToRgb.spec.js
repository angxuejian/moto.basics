
const _hexToRgb = require('../lib/hexToRgb')

describe('hexToRgb', () => {
  // https://www.sioe.cn/yingyong/yanse-rgb-16/ 转换结果对比
  
  it('should be rgb', () => {
    expect(_hexToRgb('#64463C')).toBe('rgb(100,70,60)')
  })
})
