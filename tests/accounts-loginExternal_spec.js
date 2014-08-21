var frisby = require('frisby');

var url = 'http://localhost:3000/api';

user = {
  id: '123456',
  loginToken: '123456'
};

facebookBadUser = {
  accessToken: 'CAADYoL5UQ9oBAG3o4mDfbHwgLZBPsbxTbDoxU7d4n8Wa9qZBwEeYsDJzE4FEtLvRuHMpy0LoMiXsiUXpgoS8x1TVA55Y2M3qr6IR57PSm2Myfi4CEvN1KUy2bcAaZBcgLifHLYn6adHJGROmc6TKysxKbCCI7fF9OIRh1Ud9FIr8FwouRqSnrudtCb0ues0OWIk9YmQyr7R2cWnyojj',
  userId: '100003203716841'
};

facebookGoodUser = {
  accessToken: 'CAATt40Y2djABAIpVpLhO7dvPtwhYIN9WPRaNTJbMlTtikQiljZBDgNEictX1Sf0QeeEholZAMcXiMwSPORQ2oIrP30agsUZClguj3ZCMMkPB2PrjfZBwiZBqj3ztjm4J3hugjzCXuAg9Y0itHNyCsA3cGe9xZAzhPa7AorZAJs6bzsnWWm1qwg9HzeJbHQhZB4tqs4VJQ8CYt1C9xBaM0YNZCE',
  userId: '100005361198972'
};

twitterBadUser = {
  accessToken: 12345,
  userId: 1234
};

twitterGoodUser = {
  accessToken: 123456,
  userId: 123
};

frisby.create('GET /accounts/login_external` for Facebook - Failure')
    .get(url + '/account/login_external?service=facebook&externalToken=' + facebookBadUser.accessToken + '&externalId=' + facebookBadUser.userId)
    .expectStatus(200)
    .expectHeader('content-type', 'application/json')
    .expectJSONTypes({
        success: Boolean,
        errorMessage: String
    })
    .expectJSON({
        success: false,
        errorMessage: 'User is not an alpaca'
    })
    .toss();

frisby.create('GET /accounts/login_external` for Facebook - Success')
    .get(url + '/account/login_external?service=facebook&externalToken=' + facebookGoodUser.accessToken + '&externalId=' + facebookGoodUser.userId)
    .expectStatus(200)
    .expectHeader('content-type', 'application/json')
    .expectJSONTypes({
        success: Boolean,
        loginToken: String,
        userId: String
    })
    .expectJSON({
        success: true,
        loginToken: user.loginToken,
        userId: user.id
    })
    .toss();

frisby.create('GET /accounts/login_external` for Twitter - Failure')
    .get(url + '/account/login_external?service=twitter&externalToken=' + twitterBadUser.accessToken + '&externalId=' + twitterBadUser.userId)
    .expectStatus(200)
    .expectHeader('content-type', 'application/json')
    .expectJSONTypes({
        success: Boolean,
        loginToken: String,
        userId: String
    })
    .expectJSON({
        success: true,
        errorMessage: 'User is not an alpaca'
    })
    .toss();

frisby.create('GET /accounts/login_external` for Twitter - Success')
    .get(url + '/account/login_external?service=twitter&externalToken=' + twitterGoodUser.accessToken + '&externalId=' + twitterGoodUser.userId)
    .expectStatus(200)
    .expectHeader('content-type', 'application/json')
    .expectJSONTypes({
        success: Boolean,
        loginToken: String,
        userId: String
    })
    .expectJSON({
        success: true,
        loginToken: user.loginToken,
        userId: user.id
    })
    .toss();