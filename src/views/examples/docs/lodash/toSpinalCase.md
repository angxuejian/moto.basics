# _toSpinalCase(str)

## 功能描述
将驼峰命名转为脊柱命名

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
str | string |      |  是 | 驼峰命名的字符串

## 返回

类型 | 说明
---  | ---
string | 脊柱命名的字符串


## 示例
```js
import _toSpinalCase from '@angxuejian/lodash/toSpinalCase'

const str = _toSpinalCase('toSpinalCase')

console.log(str) // to-spinal-case
```