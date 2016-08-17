var Observer = require('./observer/observer');

var obj = {
  a: 23131,
  b: {
    c: 2
  }
}

var ob = Observer.create(obj)


ob.on('get', function(val) {
  console.log(val);
});

ob.on('set', function(val, value) {
  console.log(val + ":" + value);
});

// test set methods
obj.a = 123;
obj.b.c = 'ok';

var arrayTest = [1,2,3,4];



var arrayOb = Observer.create(arrayTest);

arrayOb.on('get', function(val) {
  console.log(val);
});

arrayOb.on('set', function(val, value) {
  console.log(val + ":" + value);
});


arrayOb.on('mutate', function(val, value1, value2, value3) {
  console.log(val + " " + value1 + " " + value2 + " " + value3);
});


arrayTest.push({a: 12});


/**
 * vue 实现Observer模式的基本思路是定义了一个observer函数, 每个observer实例是new了这个函数一次。
 * observer对象通过原型集成了事件对象
 * 这个函数保存了对应需要实现observer模式的变量。
 * 这个变量里又保存了当前observer对象的引用$observer
 * 这个变量的属性会被重写set和get方法，这样在get和set的时候可以捕获到变化（触发相应事件）
 * 变量的属性会对对象和数组单独处理
 *
 * TODO 目前没有分析出来path的作用
 */

