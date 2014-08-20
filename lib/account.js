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
}

