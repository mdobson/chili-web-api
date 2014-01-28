var Users = module.exports = function(ug) {
  this.ug = ug;
};

Users.prototype.init = function(config) {
  config
    .path('/users')
    .post('/', this.createUser)
    .post('/auth', this.authorize)
    .put('/{id}', this.updateUser);
};

Users.prototype.createUser = function(env, next) {
  env.request.getBody(function(err, body) {
    if(err) {
      env.response.statusCode = 500;
      env.response.body = {'error': 'body_retrieve_failed', 'error_message':'Parsing body of request failed.'};
      next(env);
    } else {
      var b = JSON.parse(body.toString());
      var email = b.email;
      var password = b.password;
      this.ug.signup(email, password, email, email, function(err, response) {
        if(err) {
         env.errorResponse(env, next, response); 
        } else {
          this.ug.login(email, password, function(err, response) {
            if(err) {
              env.errorResponse(env, next, response);
            } else {
              console.log(response);
              env.response.statusCode = 200;
              env.response.body = {'token':response.token};
              next(env);
            }
          });
        }
      });
    }
  });
};

Users.prototype.authorize = function(env, next) {
  env.request.getBody(function(err, body) {
    if(err) {
      env.response.statusCode = 500;
      env.response.body = {'error': 'body_retrieve_failed', 'error_message':'Parsing body of request failed.'};
      next(env);
    } else {
      var b = JSON.parse(body.toString());
      var user = b.username;
      var pass = b.password;
      this.ug.login(user, pass, function(err, response) {
        if(err) {
          env.errorResponse(env, next, response);
        } else {
          console.log(response);
          env.response.statusCode = 200;
          env.response.body = {'token':response.token};
          next(env);
        }
      });
    }
  });
};

Users.prototype.updateUser = function(env, next) {

};

