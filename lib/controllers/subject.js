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

subjectId = function() {
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

subjectSearch = function() {
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

subjectSub = function() {
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

subjectUnsub = function() {
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