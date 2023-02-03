# _throttle(func, wait)

## 功能描述
节流

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
func | function | | 是 | 执行函数
wait | number | 500 | 否 | 等待时间(毫秒)


## 示例
```js
import _throttle from '@angxuejian/lodash/throttle'

const func = function() {
  consoloe.log('123')
}
_throttle(func)
```