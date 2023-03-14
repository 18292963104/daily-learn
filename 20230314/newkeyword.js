// 在创建对象的过程中new关键字都干了什么？

function myNew(fun){
    const obj = {}  // 创建一个空的对象
    obj.__proto__ = fun.prototype  //把空对象的原型指向构造函数的原型
    let result = fun.call(obj) //改变构造函数的this指向
    
    if (typeof(result) === 'object' || typeof(result) === 'function') {   // 判断返回对象类型，如果是值类型，返回创建的obj, 如果是引用类型对象，返回引用类型对象
        return result
    }
    return obj
}
