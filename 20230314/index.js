// 创建对象的6种方法

// 1. new 关键字

const person = new Object()
person.name =  'miliya'
person.sex = 'woman'
person.sayHello = function(){
    alert `hello, Everyone, I'm ${this.name}`
}

console.log(person);   // { name: 'miliya', sex: 'woman', sayHello: [Function (anonymous)] }

// 2. 字面式创建

const person = {
    name: 'miliya',
    sex: 'woman',
    sayHello: function () {
        alert `hello, Everyone, I'm ${this.name}`
    }
}

console.log(person);   // { name: 'miliya', sex: 'woman', sayHello: [Function (anonymous)] }

// 以上两种方式如果要创建多个，要写大量代码，会造成代码的冗余，所以工厂模式被开发出来

// 3. 工厂模式

function person(name, sex){
    const o = new Object()
    o.name = name
    o.sex = sex
    o.sayHello = function () {
        alert `hello, Everyone, I'm ${this.name}`
    }
    return o
}

console.log(person('miliya', 'woman'));  //{ name: 'miliya', sex: 'woman', sayHello: [Function (anonymous)] }

// 4. 原型模式

function Person(){

}
Person.prototype.name = 'miliya'
Person.prototype.sex = 'woman'
Person.prototype.sayHello = function(){
    alert `hello, Everyone, I'm ${this.name}`
}

let p = new Person()

console.log(Person.prototype);  //{ name: 'miliya', sex: 'woman', sayHello: [Function (anonymous)] }

// 5. 构造函数模式

function Person(name, sex){
    this.name = name
    this.sex = sex
    this.sayHello = function () {
        alert `hello, Everyone, I'm ${this.name}`
    }
}

console.log(new Person('miliya', 'women'));  
//{
//     name: 'miliya',
//     sex: 'women',
//     sayHello: [Function (anonymous)]
//   }

// 6. 混合模式（构造函数 + 原型模式）==》 构造函数定义不同的部分，原型定义相同的部分

function Person(name, sex){
    this.name = name
    this.sex = sex
}

Person.prototype = {
    constructor: Person, 
    sayHello: function () {
                console.log(this);
            }   
}

const p = new Person('miliya', 'woman')

console.log(p)

console.log(p.__proto__);


