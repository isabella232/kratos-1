// Generated by IcedCoffeeScript 1.8.0-c
(function() {
  var user, users;

  users = require('./users');

  user = {};

  user.handle_get_user = function(req, resp) {
    return users.get_user(req.session.user).pipe(resp);
  };

  module.exports = user;

}).call(this);
