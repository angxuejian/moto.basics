# _debounce(func, wait, immediate)

## 功能描述
防抖

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
func | function | | 是 | 执行函数
wait | number | 500 | 否 | 等待时间(毫秒)
immediate | boolean | false | 否 | 是否立即执行函数



## 示例
```js
import _debounce from '@angxuejian/lodash/debounce'

const func = function() {
  consoloe.log('123')
}
_debounce(func)
```