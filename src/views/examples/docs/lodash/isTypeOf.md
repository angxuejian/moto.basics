# _isTypeOf(value, type)

## 功能描述
判断类型是否一致

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
value | any |      |  是 | 需要判断类型的值 
type  | string |    |  是 | 期望类型

## 返回

类型 | 说明
---  | ---
boolean | 判断类型是否一致，类型一致返回true, 否则false


## 示例
```js
import _isTypeOf from '@angxuejian/lodash/isTypeof'

const list = [0, 1, 2, 3]
const isArray = _isTypeOf(list, 'array')

console.log(`list的类型是否为Array类型： ${isArray}`)
```