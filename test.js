var assert = require("assert");
var empty = require('./');

describe('empty array', function () {
  it('should be clean when via []', function () {
    var foo = [1, 2, 3, 4, 5]
    empty(foo);
    assert.equal('[]',JSON.stringify(foo))
  });

  it('should be equal', function () {
    var foo = [1, 2, 3, 4, 5]
    var bar = foo;
    empty(bar);
    assert.equal(bar,foo)
  });
});
