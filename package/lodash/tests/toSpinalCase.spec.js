const _toSpinalCase = require('../lib/toSpinalCase')


describe('toSpinalCase', () => {

  it('sholud be spinal case', () => {
    expect(_toSpinalCase('toSpinalCase')).toBe('to-spinal-case')
  })

  it('first case uncapitalize', () => {
    expect(_toSpinalCase('ToSpinalCase')).toBe('to-spinal-case')
  })
})
