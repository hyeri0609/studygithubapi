var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

//curl -X POST -H "Content-Type: application/json" -d '{"query": "{ hello }"}' http://0.0.0.0:8080/graphql
//{"data":{"hello":"Hello world!"}}

