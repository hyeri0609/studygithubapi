var supertest = require("supertest");
var should = require("should");

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

//curl -X POST -H "Content-Type: application/json" -d '{"query": "{ hello }"}' http://0.0.0.0:8080/graphql
//{"data":{"hello":"Hello world!"}}

var server = supertest.agent("http://0.0.0.0:8080");

describe("simple query test",function(){
  it("should return hello world",function(done){
    server
    .post("/graphql")
    .send({"query": "{ hello }"})
    .expect("Content-type",/json/)
    .expect(200) //HTTP response
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      
      //console.log(res.body.data);
      res.body.data.should.containEql({ hello: 'Hello world!' });
      done();
    });
  });

});

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

describe('query by XMLHttpRequest like from browser', function() {
  it('should return hello world', function() {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", "http://0.0.0.0:8080/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function () {
      console.log('data returned:', xhr.response);
      xhr.response.should.containEql({ hello: 'Hello world!' });
    }
    xhr.send(JSON.stringify({query: "{ hello }"}));

  });
});





