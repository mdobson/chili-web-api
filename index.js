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
  .add(UserResource,apigee)
  .add(EventResource,apigee)
  .add(DeviceResource,apigee)
  .listen(3000);
