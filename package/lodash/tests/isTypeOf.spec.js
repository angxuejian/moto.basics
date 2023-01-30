const _isTypeOf = require('../lib/isTypeOf')


describe('isTypeOf', () => {
  it('should be a null type', () => {
    const val = null
    expect(_isTypeOf(val, 'null')).toBeTruthy()
  })

  it('should be a string type', () => {
    expect(_isTypeOf('', 'string')).toBeTruthy()
  })

  it('should be a number type', () => {
    expect(_isTypeOf(123, 'number')).toBeTruthy()
  })

  it('should be a array type', () => {
    expect(_isTypeOf([], 'array')).toBeTruthy()
  })

  it('should be a object type', () => {
    expect(_isTypeOf({}, 'object')).toBeTruthy()
  })

  it('should be a boolean type', () => {
    expect(_isTypeOf(false, 'boolean')).toBeTruthy()
  })

  it('should be a undefined type', () => {
    let val;
    expect(_isTypeOf(val, 'undefined')).toBeTruthy()
  })

  it('should be a function type', () => {
    expect(_isTypeOf(() => {}, 'function')).toBeTruthy()
  })

  it('should be a date type', () => {
    expect(_isTypeOf(new Date(), 'date')).toBeTruthy()
  })

  it('should be a regExp type', () => {
    expect(_isTypeOf(/regexp/ig, 'regExp')).toBeTruthy()
  })

  it('should not be a string type', () => {
    expect(_isTypeOf([], 'string')).toBeFalsy()
  })
})