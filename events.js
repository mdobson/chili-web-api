var Events = module.exports = function(ug) {
  this.ug = ug;
};

Events.prototype.init = function(config) {
  config
    .post('/', this.createEvent);
};

Events.prototype.createEvent = function(env, next) {
  env.request.getBody(function(err, body) {
    if(err) {
      env.response.statusCode = 500;
      env.response.body = {'error': 'body_retrieve_failed', 'error_message':'Parsing body of request failed.'};
      next(env);
    } else {

    }
  });
};
