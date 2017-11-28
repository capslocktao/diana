const _ = require('../src/index')
const assert = require('assert')
describe('#Math API:', () => {
  describe('#sum()', () => {
    it(`_.sum([1, 2, 3, 4]) should return 10`, () => {
      assert.equal(_.sum([1, 2, 3, 4]), 10)
    })
  })
  describe('#mean()', () => {
    it(`_.mean([1, 2, 3, 4]) should return 2.5`, () => {
      assert.equal(_.mean([1, 2, 3, 4]), 2.5)
    })
  })
  describe('#max()', () => {
    it(`_.max([1, 2, 3, 4]]) should return 4`, () => {
      assert.equal(_.max([1, 2, 3, 4]), 4)
    })
  })
  describe('#min()', () => {
    it(`_.min([1, 2, 3, 4]) should return 1`, () => {
      assert.equal(_.min([1, 2, 3, 4]), 1)
    })
  })
})