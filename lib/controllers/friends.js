friendsAdd = function() {
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

friendsApprove = function() {
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

friendsCheck = function() {
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

friendsDelete = function() {
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

friendsList = function() {
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

friendsPendingApproval = function() {
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

friendsRequests = function() {
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

friendsSuggestedFriends = function() {
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