const expect = require('chai').expect;
const sum = require('./sum').sum;

describe('求和的测试', () => {
  it('1 加 1 等于 2', () => {
    expect(sum(1, 1)).to.be.equal(2);
  });
});

describe('断言测试', () => {
  class Foo {}
  let foo = { bar: 'baz' };
  it('断言', () => {
    // 相等或不相等
    expect(4 + 5).to.be.equal(9);
    expect(4 + 5).to.be.not.equal(10);
    expect(foo).to.be.deep.equal({ bar: 'baz' });

    // 布尔值为true
    expect('everthing').to.be.ok;
    expect(false).to.not.be.ok;

    foo = new Foo();
    // typeof
    expect('test').to.be.a('string');
    expect({ foo: 'bar' }).to.be.an('object');
    expect(foo).to.be.an.instanceof(Foo);

    // include
    expect([1, 2, 3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

    // empty
    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;
  });

  it('正则', () => {
    // match
    expect('foobar').to.match(/^foo/);
  });
});
