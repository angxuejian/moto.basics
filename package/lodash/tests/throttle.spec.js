const _throttle = require('../lib/throttle')

describe('throttle', () => {

  it('should be 1', done => {
    let num = 0
    // 默认 500毫秒
    const func = _throttle(() => num += 1)
    func()
    func()
    func()

    setTimeout(() => {
      expect(num).toBe(1)
      done()
    }, 500);
  })


  it('should be 2', done => {
    let num = 0
    const func = _throttle(() => num += 1, 500)
    func()
    expect(num).toBe(0)

    setTimeout(() => {
      func()
      expect(num).toBe(1)
    }, 500)

    setTimeout(() => {
      expect(num).toBe(2)
      done()
    }, 1100)
  })
})
