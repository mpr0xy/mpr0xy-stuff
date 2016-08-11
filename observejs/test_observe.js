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