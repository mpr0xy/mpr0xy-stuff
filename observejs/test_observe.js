function Emitter(ctx) {
  this._ctx = ctx || null;
}

var EmitterP = Emitter.prototype;

EmitterP.on = function() {
  console.log("test on function");
}

function Observe(value, type) {
  Emitter.call(this);
}

var p = Observe.prototype = Object.create(Emitter.prototype);

p.init = function() {
  console.log("init Observe");
}


var testObserve = new Observe('test', 'type');


// 模拟set get

var testArray = [1,2,3,4]

for (var key in testArray) {
  var val = testArray[key];
  (function(_key, _val) {
    Object.defineProperty(testArray, _key, {
      enumerable: true,
      configurable: true,
      get: function() {
        console.log('get ' + _key);
        return _val;
      },
      set: function (newVal) {
        if (newVal === _val) {
          return;
        }
        console.log('new val ' + newVal);
      }
    });
  })(key, val)
}

testArray[1] = '234';
testArray.push(12);
console.log("testArray " + testArray[0]);