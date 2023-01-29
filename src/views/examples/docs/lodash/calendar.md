# _Calendar(Object object)

## 功能描述
日期对象

## 参数
### Object object

属性 | 类型 | 默认值 | 必填 | 说明
---  | ---  | ---  | --- | ---
date   | date |  new Date()  |  否 | 日期对象
isLunar  | boolean | true   |  否 | 是否显示阴历日期

## 方法

名称 |  返回值 |  说明
---  | --- |---
getDate | 	{ solar, lunar }  | 获取某一天的日期信息


## 示例
```js
import _Calendar from '@angxuejian/lodash/Calendar'

const Canlendar = new _Canlendar()

console.log(Canlendar.getDate()) // 当天的阳历和阴历的日期
```