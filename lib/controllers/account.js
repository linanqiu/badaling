accountLoginExternal = function() {
  setHeaderTemplate(this);
  var returnObject = {};

  if (isGet(this)) {
    this.response.statusCode = 200;
    kanasai(this, returnObject);
    this.response.end(JSON.stringify(returnObject, null, 2));
  } else {
    this.response.statusCode = 406; // not acceptable
    writeErrorMessage(returnObject, 406);
    kanasai(this, returnObject);
    invalidMethod(this, ['GET']);
    this.response.end(JSON.stringify(returnObject, null, 2));
  }
};

accountLoginPassword = function() {
  setHeaderTemplate(this);
  var returnObject = {};

  if (isGet(this)) {
    this.response.statusCode = 200;
    kanasai(this, returnObject);
    this.response.end(JSON.stringify(returnObject, null, 2));
  } else {
    this.response.statusCode = 406; // not acceptable
    writeErrorMessage(returnObject, 406);
    kanasai(this, returnObject);
    invalidMethod(this, ['GET']);
    this.response.end(JSON.stringify(returnObject, null, 2));
  }
};

accountLogout = function() {
  setHeaderTemplate(this);
  var returnObject = {};

  if (isGet(this)) {
    this.response.statusCode = 200;
    kanasai(this, returnObject);
    this.response.end(JSON.stringify(returnObject, null, 2));
  } else {
    this.response.statusCode = 406; // not acceptable
    writeErrorMessage(returnObject, 406);
    kanasai(this, returnObject);
    invalidMethod(this, ['GET']);
    this.response.end(JSON.stringify(returnObject, null, 2));
  }
};

accountLookup = function() {
  setHeaderTemplate(this);
  var returnObject = {};

  if (isGet(this)) {
    this.response.statusCode = 200;
    kanasai(this, returnObject);
    this.response.end(JSON.stringify(returnObject, null, 2));
  } else {
    this.response.statusCode = 406; // not acceptable
    writeErrorMessage(returnObject, 406);
    kanasai(this, returnObject);
    invalidMethod(this, ['GET']);
    this.response.end(JSON.stringify(returnObject, null, 2));
  }
};

accountDelete = function() {
  setHeaderTemplate(this);
  var returnObject = {};

  if (isGet(this)) {
    this.response.statusCode = 200;
    kanasai(this, returnObject);
    this.response.end(JSON.stringify(returnObject, null, 2));
  } else {
    this.response.statusCode = 406; // not acceptable
    writeErrorMessage(returnObject, 406);
    kanasai(this, returnObject);
    invalidMethod(this, ['GET']);
    this.response.end(JSON.stringify(returnObject, null, 2));
  }
};

accountNewUsername = function() {
  setHeaderTemplate(this);
  var returnObject = {};

  if (isGet(this)) {
    this.response.statusCode = 200;
    kanasai(this, returnObject);
    this.response.end(JSON.stringify(returnObject, null, 2));
  } else {
    this.response.statusCode = 406; // not acceptable
    writeErrorMessage(returnObject, 406);
    kanasai(this, returnObject);
    invalidMethod(this, ['GET']);
    this.response.end(JSON.stringify(returnObject, null, 2));
  }
};

accountProfile = function() {
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

accountVerify = function() {
  setHeaderTemplate(this);
  var returnObject = {};

  if (isGet(this)) {
    this.response.statusCode = 200;
    kanasai(this, returnObject);
    this.response.end(JSON.stringify(returnObject, null, 2));
  } else {
    this.response.statusCode = 406; // not acceptable
    writeErrorMessage(returnObject, 406);
    kanasai(this, returnObject);
    invalidMethod(this, ['GET']);
    this.response.end(JSON.stringify(returnObject, null, 2));
  }
};