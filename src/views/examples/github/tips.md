# Tips

## 跨域

1、什么是跨域？

浏览器的同源策略、是对JavaScript的安全限制；同源策略是指：协议、端口、域名必须相同、否则会跨越！如果缺少同源策略，容易受到 [XSS](https://baike.baidu.com/item/XSS%E6%94%BB%E5%87%BB/954065)、[CSFR](https://baike.baidu.com/item/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0/13777878?fromtitle=CSRF&fromid=2735433)等攻击


2、如何解决跨越？

- jsonp
- 后端开放 Access-Control-Allow-Origin 请求头
- [nginx代理跨域](https://github.com/angxuejian/http-cros-proxy-template/tree/nginx)
- [nodejs代理跨越](https://github.com/angxuejian/http-cros-proxy-template/tree/express)


## 浏览器
1、浏览器输入url发生了什么？

1. 输入url 
2. 浏览器主进程接管、分配线程
3. 请求http(省略 dns、ip)
4. 等待响应、获取内容
5. 浏览器渲染

    1. 根据html生成dom树 + 根据css生成style树
    2. 将 dom树 和 style树 合并成 render树
    3. 根据render树进行 回流, 计算元素位置、尺寸 
    4. 根据render树进行 重绘, 获取页面像素信息
    5. 由浏览器将页面像素信息交给GPU、GPU将各层合成(composite)、展示页面。

2、回流、重绘？

1. 回流：**负责计算元素位置、尺寸。** 例：div的宽度设置为50%, 将50%计算为页面像素尺寸时。这一阶段就叫 回流。

2. 重绘：**负责获取页面像素信息、如 颜色、圆角、阴影等**

3. 最后：每次回流都会对浏览器进行额外的计算消耗。降低回流的方式：**要么减少次数，要么降低影响范围、要么使用硬件加速**

    1. 减少次数：减少dom操作、频繁修改文本内容、尺寸、位置、窗口大小等
    2. 降低影响范围：操作使用 absolute、fixed布局的元素。脱离文档流、避免牵一发而动全身
    3. 硬件加速：使用绝对布局只是降低影响，但还是使用同一图层。 而使用 translate 则是新建复合图层，与之前图片并无关联。注意哦！过度使用硬件加速也会消耗内存。


4. 写的不好。推荐[这个](https://www.cnblogs.com/dailc/p/8325991.html)

## JS对比？
```
// 示例一
const data = { age: 21 }
console.log(data === { age: 21 }) // false


// 示例二
const num = 9
console.log(num === 9) // true
```

1、为什么 示例一打印为false，而示例二打印为 true ？

1. 因为js 会将简单数据类型分配到 栈中， 而复杂类型会分配到 堆中，只会在 栈中留下指针
2. 示例一中创建了两次 `{ age: 21 }`， 但只会在栈中留下两次指针，而两次的数据的都会存在堆中，之后 `===` 只会对比指针指向是否相等。
3. 示例二中虽然创建了两次`9`，但是都会将数据存在 栈中，之后`===` 会在 栈中直接对比数据



## 继承
[关于实例、构造函数、原型、原型链](https://www.cnblogs.com/leftJS/p/10943482.html)

1、<span id='1'>原型链继承</span>

特点：将父类的实例作为子类的原型
```
// 父类
function Father(age) {
  this.name = '雪健'
  this.list = [1, 2, 3, 4]
  this.getName = function() {
    return `getName: ${this.name}`
  }
}

// 子类
function Son() {

}


/**
  * 缺点 a: new 之前在原型链创建的属性 或方法 都为 undefined 或 not a function 
*/
Son.prototype.age = 12 
Son.prototype.getAge = function() {
  return `getAge: ${this.age}`
}


/**
  * 缺点 b: Son.prototype = new xx() 会覆盖之前 prototype, 无法多继承
*/
Son.prototype = new Father() 


/**
  *  缺点 c: 创建子类实例、无法向父类构造函数传参
*/
const son = new Son()
console.log(son.name) // 雪健
console.log(son.getName()) // getName: 雪健


/**
  * 缺点 d: 修改原型属性 值后，所有实例属性全被修改
*/
const son2 = new Son()

// 示例一
son2.name = 'xuejian' // 修改对象属性 值
console.log('这是实例二: ' + son2.name) // 这是实例二: xuejian
console.log('这是实例一: ' + son.name)  // 这是实例一: 雪健

// 示例二
son2.list.push(5)
console.log('这是实例二：' + son2.list) // 这是实例二：[1, 2, 3, 4, 5]
console.log('这是实例一：' + son.list)  // 这是实例一：[1, 2, 3, 4, 5]

// Q 为什么示例一中的 name 的值没有改变呢？

// A 当实例对象上出现与原型同名属性时、会屏蔽原型属性。
//   所以示例一中的 son2.name = 'xuejian' 只是添加到实例对象中、并未改变原型上的name

```

- 优点

  1. 父类属性及方法、子类都可获取
  2. 简单、方便
- 缺点

  1. 子类新增原型链上的方法及属性时、只能在 new 之后增加
  2. 无法多继承
  3. 创建子类实例时、无法向父类构造函数传参
  4. 同一原型属性, 被所有实例共享。一改全改

<br>
<br>

2、<span id='2'>构造函数继承</span>

特点：将父类实例属性、方法 call到子类上(并未使用到原型)
```
// 父类
function Father(age) {
  this.name = '雪健'
  this.list = [1, 2, 3, 4]
  this.getName = function() {
    return `getName: ${this.name}`
  }
}

// 子类
function Son() {
  /**
    * 缺点 a: call时会复制一份副本
  */
  Father.call(this)
}
const son = new Son()


/**
  * 缺点 b: 实例原型不等于父类原型、无继承
*/
console.log(son.__proto__ === Father.prototype) // false


/**
  * 缺点 c: 实例等于子类、不等于父类
*/
console.log(son instanceof Son)    // true
console.log(son instanceof Father) // false

```

- 优点

  1. 解决所有实例共享 属性问题
  2. 可以多继承(call多个)
  3. 创建子类实例时、可以向父类构造函数传参(call时 传参)

- 缺点

  1. 函数无复用、每个子类都会有父类函数的副本
  2. 只能使用实例属性、方法。并未继承原型
  3. 只是子类的实例、并不是父类的实例

<br>
<br>

3、实例继承(原型式继承)
  
特点：基于已有原型对象、创建新实例; (将父类实例 作为子类实例返回, Object.create()同理)
```
// 父类
function Father(age) {
  this.name = '雪健'
  this.list = [1, 2, 3, 4]
  this.getName = function() {
    return `getName: ${this.name}`
  }
}

// 子类
function Son() {
  const father = new Father()

  /**
    * 缺点 a: 一次只能返回一个、不支持多继承
  */
  return father
}
const son = new Son()


/**
  * 缺点 b: 是父类的实例、不是子类的实例
*/
console.log(son instanceof Son)    // false
console.log(son instanceof Father) // true

```

- 优点

  1. 是否 new, 返回的对象具有相同效果

- 缺点

  1. 不支持多继承
  2. 是父类的实例、并不是子类的实例

<br>
<br>

4、拷贝继承

特点：循环拷贝父类实例属性及方法
```
// 父类
function Father(age) {
  this.name = '雪健'
  this.list = [1, 2, 3, 4]
  this.getName = function() {
    return `getName: ${this.name}`
  }
}

// 子类
function Son() {
  const father = new Father()

  /**
    * 缺点 a: 循环效率低
    * 缺点 b: for in 无法获取不可枚举属性
  */
  for (const key in father) {
    Son.prototype[key] = father[key]
  }
}

const son = new Son()
```

- 优点

  1. 支持多继承

- 缺点

  1. 效率低、循环拷贝占用内存
  2. 无法获取不可枚举属性

<br>
<br>

5、<span id='5'>组合式继承</span>

特点：结合原型链继承 + 构造继承
```
// 父类
function Father(age) {
  this.name = '雪健'
  this.list = [1, 2, 3, 4]
  this.getName = function() {
    return `getName: ${this.name}`
  }
}


// 子类
function Son() {
  Father.call(this) // 第二次调用父类
}

Son.prototype = new Father() // 第一次调用父类
Son.prototype.constructor = Son // 指向 自身

const son = new Son()
console.log(son instanceof Father) // true
console.log(son instanceof Son)   // true
```

- 优点

  1. 解决所有实例共享 属性问题
  2. 可以多继承(call多个)
  3. 创建子类实例时、可以向父类构造函数传参(call时 传参)
  4. 实例即使父类的也是子类的
  5. 函数复用

- 缺点
  
  1. 调用两次父类构造函数、生成两次实例

<br>
<br>

6、<span id='6'>寄生式继承</span>

特点：创建一个封装继承过程的函数
```
// 父类
function Father() {
  this.name = '雪健'
  this.list = [1, 2, 3, 4]
  this.getName = function() {
    return `getName: ${this.name}`
  }
}

// 创建实例
function CreateProto(obj) {
  function Proto() {}
  Proto.prototype = obj
  return new Proto()
}

// 封装继承过程的函数
function CreateClass(data) {
  const obj = CreateProto(data)

  // 增强该实例的 方法
  obj.getList = function() {
    console.log(this.list)
  }

  return obj
}

const father = new Father()
const son = CreateClass(new Father)
son.getList() // [1, 2, 3, 4]

/**
  * 缺点 a: 函数无复用
*/
console.log(son.getName === father.getName)
```

- 优点

  1. 解决所有实例共享 属性问题
  2. 可传参

- 缺点

  1. 函数无复用

<br>
<br>

7、<span id='7'>寄生组合式继承</span>

特点：结合组合继承 + 寄生式继承
```
// 父类
function Father() {
  this.name = '雪健'
  this.list = [1, 2, 3, 4]
  this.getName = function() {
    return `getName: ${this.name}`
  }
}

// 子类
function Son() {
  Father.call(this)
}

// 创建实例
function CreateProto(obj) {
  function Proto() {}
  Proto.prototype = obj
  return new Proto()
}

Son.prototype = CreateProto(Father.prototype)
Son.prototype.constructor = Son // 指向自身

const son = new Son()
console.log(son instanceof Father) // true
console.log(son instanceof Son)    // true

```

- 优点

  1. 都说完美

- 缺点

  1. 需要沉淀

- 步骤
  
  1. [原型链继承](#1) + [构造继承](#2) = [组合继承](#5)
  2. [寄生式继承](#6)
  3. [寄生式继承](#6) + [组合继承](#5) = [寄生组合继承](#7)

<br>
<br>

8、ES6 Class继承

特点：ES5继承的语法糖

```
// 父类
class Father {
  constructor(name = '雪健') {
    this.name = name
    this.list = [1, 2, 3, 4]
  }

  getName() {
    return `getName: ${this.name}`
  }
}

// 子类
class Son extends Father {
  constructor() {
    super() // 必须调用、否则调用this会报错
  }

  getList() {
    return `getList: ${this.list}`
  }
}

const son = new Son()
```

- ES6 与 ES5继承有什么区别？

  1. ES6: 创建父类、通过extends继承后、调用super 获取父类this、获取this后修改子类

  2. ES5: 创建子类实例、通过prototype将父类原型属性赋值给子类实例

