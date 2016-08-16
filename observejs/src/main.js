var Observer = require('./observer/observer');

var obj = {
  a: 1,
  b: {
    c: 2
  }
}

var ob = Observer.create(obj)


ob.on('get', function(val) {
  console.log(val);
});