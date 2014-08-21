var frisby = require('frisby');

var url = 'http://localhost:3000/api';

user = {
  id: '123456',
  loginToken: '123456',
  username: 'ligang',
  password: 'mydadisligang'
};

frisby.create('GET /accounts/login_password` - Success')
    .get(url + '/account/login_password?user=' + user.username + '&password=' + user.password)
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

frisby.create('GET /accounts/login_password` - Failure from wrong credentials')
    .get(url + '/account/login_password?user=badUser&password=badPassword')
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

frisby.create('GET /accounts/login_password` - Failure from null entries')
    .get(url + '/account/login_password?user=&password=')
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

frisby.create('GET /accounts/login_password` - Failure from missing username')
    .get(url + '/account/login_password?password=' + user.password)
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

frisby.create('GET /accounts/login_password` - Failure from missing password')
    .get(url + '/account/login_password?user=' + user.username)
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

frisby.create('GET /accounts/login_password` - Failure from missing username and password')
    .get(url + '/account/login_password')
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