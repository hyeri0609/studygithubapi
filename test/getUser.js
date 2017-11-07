var request = require('superagent');
var should = require("should");

// var superagent = supertest.agent("https://api.github.com");
// var Request = request.Request;
// if (Request) {
//   Request.prototype.bearer = function(token) {
//     Request.set('Authorization', 'Bearer ' + token);
//   };
// }

// query {
//   __schema {
//     types {
//       name
//       kind
//       description
//       fields {
//         name
//       }
//     }
//   }
// }

/* global describe it */
describe("get user profile",function(){
  it("should return user profile",function(done){
      //superagent.Request.set('Authorization', 'Bearer 33e0802256a91eb0c00e9cf6c45d82522753d6a9');
    request
    .post("https://api.github.com/graphql")
    .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + '33e0802256a91eb0c00e9cf6c45d82522753d6a9'})
    //.bearer('33e0802256a91eb0c00e9cf6c45d82522753d6a9')
    //.set('Authorization', 'Bearer 33e0802256a91eb0c00e9cf6c45d82522753d6a9')
    //.set('Accept', 'application/json')
    .send({"query": "{ query {  __schema {    types {      name      kind      description      fields {        name      }    }  }} }"})
    .end(function(err, res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      
      console.log(res.body.data);
      res.body.data.should.containEql({ hello: 'Hello world!' });
      done();
    });
  });

});

// describe("simple query test",function(){
//   it("should return hello world",function(done){
//     server
//     .post("/graphql")
//     .send({"query": "{ hello }"})
//     .expect("Content-type",/json/)
//     .expect(200) //HTTP response
//     .end(function(err,res){
//       res.status.should.equal(200);
//       res.error.should.equal(false);
      
//       //console.log(res.body.data);
//       res.body.data.should.containEql({ hello: 'Hello world!' });
//       done();
//     });
//   });

// });
