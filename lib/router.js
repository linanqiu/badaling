var apiPath = "/api";
Router.map(function() {
    this.route('accountLoginExternal', {
        path: apiPath + '/account/login_external',
        where: 'server',
        action: accountLoginExternal
    });
    this.route('accountLoginPassword', {
        path: apiPath + '/account/login_password',
        where: 'server',
        action: accountLoginPassword
    });
    this.route('accountLogout', {
        path: apiPath + '/account/logout',
        where: 'server',
        action: accountLogout
    });
    this.route('accountLookup', {
        path: apiPath + '/account/lookup',
        where: 'server',
        action: accountLookup
    });
    this.route('accountDelete', {
        path: apiPath + '/account/delete',
        where: 'server',
        action: accountDelete
    });
    this.route('accountNewUsername', {
        path: apiPath + '/account/new_username',
        where: 'server',
        action: accountNewUsername
    });
    this.route('accountProfile', {
        path: apiPath + '/account/profile',
        where: 'server',
        action: accountProfile
    });
    this.route('accountVerify', {
        path: apiPath + '/account/verify',
        where: 'server',
        action: accountVerify
    });
    this.route('friendsAdd', {
        path: apiPath + '/friends/add',
        where: 'server',
        action: friendsAdd
    });
    this.route('friendsApprove', {
        path: apiPath + '/friends/approve',
        where: 'server',
        action: friendsApprove
    });
    this.route('friendsCheck', {
        path: apiPath + '/friends/check',
        where: 'server',
        action: friendsCheck
    });
    this.route('friendsDelete', {
        path: apiPath + '/friends/delete',
        where: 'server',
        action: friendsDelete
    });
    this.route('friendsList', {
        path: apiPath + '/friends/list',
        where: 'server',
        action: friendsList
    });
    this.route('friendsPendingApproval', {
        path: apiPath + '/friends/pending_approval',
        where: 'server',
        action: friendsPendingApproval
    });
    this.route('friendsRequests', {
        path: apiPath + '/friends/requests',
        where: 'server',
        action: friendsRequests
    });
    this.route('friendsSuggestedFriends', {
        path: apiPath + '/friends/suggested_friends',
        where: 'server',
        action: friendsSuggestedFriends
    });
    this.route('adminBan', {
        path: apiPath + '/admin/ban',
        where: 'server',
        action: adminBan
    });
    this.route('adminEditExp', {
        path: apiPath + '/admin/edit_exp',
        where: 'server',
        action: adminEditExp
    });
    this.route('questionAddAnswer', {
        path: apiPath + '/question/add_answer',
        where: 'server',
        action: questionAddAnswer
    });
    this.route('questionAddQuestion', {
        path: apiPath + '/question/add_question',
        where: 'server',
        action: questionAddQuestion
    });
    this.route('questionDeleteAnswer', {
        path: apiPath + '/question/delete_answer',
        where: 'server',
        action: questionDeleteAnswer
    });
    this.route('questionDeleteQuestion', {
        path: apiPath + '/question/delete_question',
        where: 'server',
        action: questionDeleteQuestion
    });
    this.route('questionDownvote', {
        path: apiPath + '/question/downvote',
        where: 'server',
        action: questionDownvote
    });
    this.route('questionEditAnswer', {
        path: apiPath + '/question/edit_answer',
        where: 'server',
        action: questionEditAnswer
    });
    this.route('questionEditQuestion', {
        path: apiPath + '/question/edit_question',
        where: 'server',
        action: questionEditQuestion
    });
    this.route('questionFlagAnswer', {
        path: apiPath + '/question/flag_answer',
        where: 'server',
        action: questionFlagAnswer
    });
    this.route('questionFlagQuestion', {
        path: apiPath + '/question/flag_question',
        where: 'server',
        action: questionFlagQuestion
    });
    this.route('questionId', {
        path: apiPath + '/question/id',
        where: 'server',
        action: questionId
    });
    this.route('questionSearch', {
        path: apiPath + '/question/search',
        where: 'server',
        action: questionSearch
    });
    this.route('questionSub', {
        path: apiPath + '/question/sub',
        where: 'server',
        action: questionSub
    });
    this.route('questionUnsub', {
        path: apiPath + '/question/unsub',
        where: 'server',
        action: questionUnsub
    });
    this.route('questionUpvote', {
        path: apiPath + '/question/upvote',
        where: 'server',
        action: questionUpvote
    });
    this.route('subjectId', {
        path: apiPath + '/subject/id',
        where: 'server',
        action: subjectId
    });
    this.route('subjectSearch', {
        path: apiPath + '/subject/search',
        where: 'server',
        action: subjectSearch
    });
    this.route('subjectSub', {
        path: apiPath + '/subject/sub',
        where: 'server',
        action: subjectSub
    });
    this.route('subjectUnsub', {
        path: apiPath + '/subject/unsub',
        where: 'server',
        action: subjectUnsub
    });
});