var request = require('superagent');
var should = require("should");

/* global describe it */
describe("get user profile",function(){
  it("should return user profile",function(done){
    request
    .post("https://api.github.com/graphql")
    .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + 'f9383a69e3e79cb70abae61780989af73190b820'})
    .send({"query": "{ viewer { login } }"})
    .end(function(err, res){
        if (err || !res.ok) {
            console.log('Found error');
        } else {
            //console.log('yay got ' + JSON.stringify(res.body));
            res.body.data.should.containEql({"viewer":{"login":"hyeri0609"}});
        }
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
