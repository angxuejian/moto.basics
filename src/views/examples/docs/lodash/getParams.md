# _getParams(key, url)

## 功能描述
获取url中value值

## 参数

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
key | string |    |  是 | url地址中的key值
url  | string |   window.location.href   |  否 | 要解析的url地址


## 返回

类型 | 说明
---  | ---
string | url中key对应的value值


## 示例
```js
import _getParams from '@angxuejian/lodash/getParams'

const value = _getParams('name', 'https://www.baidu.com?name=yuhua')
console.log(value)
```