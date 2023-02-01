const _getDepthValue = require('../lib/getDepthValue')

describe('getDepthValue', () => {
  let data = {}

  beforeEach(() => {
    data = { data: { name: 'yuhua' } }
  })

  it('get string value', () => {
    expect(_getDepthValue(data, 'data.name')).toBe('yuhua')
  })

  it('get array value', () => {
    expect(_getDepthValue(data, ['data', 'name'])).toBe('yuhua')
  })

  it('value should be empty', () => {
    expect(_getDepthValue(data, ['data1', 'name1'])).toBe('')
  })
})