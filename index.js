var argo = require('argo'),
    ug = require('usergrid'),
    titan = require('titan'),
    UserResource = require('./users.js'),
    EventResource = require('./events.js'),
    DeviceResource = require('./devices.js');

var apigee = new ug.client({
  orgName:'mdobson',
  appName:'chiliapi'
});

argo()
  .use(titan)
  .use(function(handle) {
    handle('request', function(env, next) {
      env.errorResponse = function(env, next, response) {
        env.response.statusCode = 500;
        env.response.body = {'error':response.error, 'error_message':response.error_message};
        next(env);
      };
    });
  )
  .add(UserResource,apigee)
  .add(EventResource,apigee)
  .add(DeviceResource,apigee)
  .listen(3000);
