var request = require('superagent');
var should = require("should");

/* global describe it */
describe("get current user's name",function(){
  it("should return current user's name",function(done){
    request
    .post("https://api.github.com/graphql")
    .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + 'da35ade53992329d78bd46d0d57ffd37e1ed'+'b4bf'})
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

describe("get current user's name",function(){
  it("should return current user's name",function(done){
    request
    .post("https://api.github.com/graphql")
    .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + 'da35ade53992329d78bd46d0d57ffd37e1ed'+'b4bf'})
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