// foo.js
var foo = function () {
  console.log('foo!');
}

// buz.js
var Buz = function () {};

Buz.prototype.log = function () {
  console.log('buz!');
};

module.exports = new Buz();