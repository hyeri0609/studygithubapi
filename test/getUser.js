var request = require('superagent');
var should = require("should");

/* global describe it */

//https://developer.github.com/v4/reference/object/user/

describe("get current user's name",function(){
  it("should return current user's name",function(done){
    request
    .post("https://api.github.com/graphql")
    .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + 'da35ade53992329d78bd46d0d57ffd37e1ed'+'b4bf'})
    .send({"query": "{ viewer { login } }"})
    .end(function(err, res){
        res.status.should.equal(200);
        res.error.should.equal(false);
        if (err || !res.ok) {
            console.log('Found error');
        } else {
            res.body.data.should.containEql({"viewer":{"login":"hyeri0609"}});
            console.log('res.body: ' + JSON.stringify(res.body));
        }
      done();
    });
  });
});

describe("get current user's email",function(){
  it("should return current user's email",function(done){
    request
    .post("https://api.github.com/graphql")
    .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + 'da35ade53992329d78bd46d0d57ffd37e1ed'+'b4bf'})
    .send({"query": "{ viewer { login avatarUrl email } }"})
    .end(function(err, res){
        res.status.should.equal(200);
        res.error.should.equal(false);
        if (err || !res.ok) {
            console.log('Found error');
        } else {
            console.log('res.body: ' + JSON.stringify(res.body));
            res.body.data.should.containEql({"viewer":{"login":"hyeri0609","avatarUrl":"https://avatars1.githubusercontent.com/u/32530272?v=4","email":""}});
        }
      done();
    });
  });
});