questionAddAnswer = function() {
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

questionAddQuestion = function() {
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

questionDeleteAnswer = function() {
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

questionDeleteQuestion = function() {
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

questionDownvote = function() {
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

questionEditAnswer = function() {
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

questionEditQuestion = function() {
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

questionFlagAnswer = function() {
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

questionFlagQuestion = function() {
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

questionId = function() {
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

questionSearch = function() {
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

questionSub = function() {
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

questionUnsub = function() {
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

questionUpvote = function() {
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