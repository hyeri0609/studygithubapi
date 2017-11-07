var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://0.0.0.0:8080");

33e0802256a91eb0c00e9cf6c45d82522753d6a9

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
