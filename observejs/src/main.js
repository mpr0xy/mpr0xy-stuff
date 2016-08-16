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