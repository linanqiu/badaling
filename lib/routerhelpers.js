// Helper methods that I will move to another file soon
// ====================================================
setHeaderTemplate = function(routeController) {
  routeController.response.setHeader("Content-Type", "application/json");
  routeController.response.setHeader("Access-Control-Allow-Origin", "*");
  routeController.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}

isGet = function(routeController) {
  return (routeController.request.method == 'GET');
}

isPost = function(routeController) {
  return (routeController.request.method == 'POST');
}

invalidMethod = function(routeController, allowedMethods) {
  var allowedMethodsString = allowedMethods.join(", ");
  routeController.response.setHeader("Access-Control-Allow-Methods", allowedMethodsString);
}

// writes a cute little error message
writeErrorMessage = function(returnObject, statusCode) {
  switch (statusCode) {
    case 406:
      returnObject['error'] = "Invalid Parameters";
      break;

    default:
      returnObject['error'] = "Life Sucks";
      break;
  }
}