var apiPath = "/api";

Router.map(function() {

    // accounts
    this.route('accountDelete', {
        path: apiPath + '/account/delete',
        where: 'server',
        action: accountDelete
    });
});