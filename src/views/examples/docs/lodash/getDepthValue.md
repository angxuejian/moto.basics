# _getDepthValue(obj, keys)

## 功能描述
获取对象多层嵌套的值

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
obj  | object |      |  是 | 数据对象
keys | string、array |    |  是 | 多层嵌套的key值; 使用`.`或`[]`取值

## 返回

类型 | 说明
---  | ---
any | obj下key对应的value值


## 示例
```js
import _getDepthValue from '@angxuejian/lodash/getDepthValue'

const obj = { a: { b: 1 } }
const value1 = _getDepthValue(obj, 'a.b')
const value2 = _getDepthValue(obj, ['a', 'b'])
console.log('value1的值：', value1)
console.log('value2的值：', value2)
```