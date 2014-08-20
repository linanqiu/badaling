adminBan = function() {
  setHeaderTemplate(this);
  var returnObject = {};

  if (isPost(this)) {
    this.response.statusCode = 200;
    kanasai(this, returnObject);
    this.response.end(JSON.stringify(returnObject, null, 2));
  } else {
    this.response.statusCode = 406; // not acceptable
    writeErrorMessage(returnObject, 406);
    kanasai(this, returnObject);
    invalidMethod(this, ['POST']);
    this.response.end(JSON.stringify(returnObject, null, 2));
  }
};

adminEditExp = function() {
  setHeaderTemplate(this);
  var returnObject = {};

  if (isPost(this)) {
    this.response.statusCode = 200;
    kanasai(this, returnObject);
    this.response.end(JSON.stringify(returnObject, null, 2));
  } else {
    this.response.statusCode = 406; // not acceptable
    writeErrorMessage(returnObject, 406);
    kanasai(this, returnObject);
    invalidMethod(this, ['POST']);
    this.response.end(JSON.stringify(returnObject, null, 2));
  }
};