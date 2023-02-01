const _getParams = require('../lib/getParams')


describe('getParams', () => {

  it('get url value', () => {
    expect(_getParams('name', 'https://www.baidu.com?name=yuhua')).toBe('yuhua')
  })

  it('sholud be empty', () => {
    expect(_getParams('name')).toBe('')
  })

  it('url value sholud be empty', () => {
    expect(_getParams('name', 'https://www.baidu.com')).toBe('')
  })
})
