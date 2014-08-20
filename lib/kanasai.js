// preps a json object for testing purposes
kanasai = function(routeController, returnObject) {
  returnObject['method'] = routeController.request.method;
  returnObject['headers'] = routeController.request.headers;
  returnObject['params'] = {};

  if (returnObject['method'] == "GET") {
    for (var paramKey in routeController.params) {
      if (paramKey != 'hash') {
        returnObject['params'][paramKey] = routeController.params[paramKey];
      }
    }
  } else if (returnObject['method'] == "POST") {
    returnObject['params'] = routeController.request.body;
  }
}