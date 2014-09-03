Disciplines = new Meteor.Collection('disciplines');
Subjects = new Meteor.Collection('subjects');
Schools = new Meteor.Collection('schools');

Questions = new Meteor.Collection('questions');

// Permissions

Disciplines.allow({
  insert: function(userId, doc) {
    // user must be logged in and must be admin
    return (userId && Users.find({
      _id: userId
    }).userType === "Admin");
  },
  update: function(userId, doc, fields, modifier) {
    // user must be logged in and must be admin
    return (userId && Users.find({
      _id: userId
    }).userType === "Admin");
  },
  remove: function(userId, doc) {
    // user must be logged in and must be admin
    return (userId && Users.find({
      _id: userId
    }).userType === "Admin");
  }
});

Subjects.allow({
  insert: function(userId, doc) {
    // user must be logged in and must be admin
    return (userId && Users.find({
      _id: userId
    }).userType === "Admin");
  },
  update: function(userId, doc, fields, modifier) {
    // user must be logged in and must be admin
    return (userId && Users.find({
      _id: userId
    }).userType === "Admin");
  },
  remove: function(userId, doc) {
    // user must be logged in and must be admin
    return (userId && Users.find({
      _id: userId
    }).userType === "Admin");
  }
});

Subjects.allow({
  insert: function(userId, doc) {
    // user must be logged in and must be admin
    return (userId && Users.find({
      _id: userId
    }).userType === "Admin");
  },
  update: function(userId, doc, fields, modifier) {
    // user must be logged in and must be admin
    return (userId && Users.find({
      _id: userId
    }).userType === "Admin");
  },
  remove: function(userId, doc) {
    // user must be logged in and must be admin
    return (userId && Users.find({
      _id: userId
    }).userType === "Admin");
  }
});

Questions.allow({
  insert: function(userId, doc) {
    // user must be logged in
    return (!!userId);
  },
  update: function(userId, doc, fields, modifier) {
    // user must be logged in. the rest of the validation happens in the Meteor.Method, not here
    return (!!userId);
  },
  remove: function(userId, doc) {
    // only the user himself and admins
    return (Users.find({
      _id: userId
    }).userType === "Admin" || doc.author === userId)
  },
  fetch: ['author', 'answers']
});