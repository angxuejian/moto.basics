
const _debounce = require('../lib/debounce')

describe('debounce', () => {

  it('should be 1', done => {
    let num = 0
    // 默认 500毫秒
    const func = _debounce(() => num += 1)
    func()
    func()
    func()

    setTimeout(() => {
      expect(num).toBe(1)
      done()
    }, 600);
  })

  it('should be 5', done => {
    let num = 0
    const func = _debounce(n => num = n, 600, true)
    func(5)
    func(6)
    func(7)

    setTimeout(() => {
      expect(num).toBe(5)
      done()
    }, 700);
  })
})
