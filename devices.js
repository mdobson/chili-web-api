var Devices = module.exports = function(ug) {
  this.ug = ug;
};

Devices.prototype.init = function(config) {
  config
    .path('/devices')
    .get('/{id}', this.getDevice)
    .post('/', this.register)
    .put('/{id}', this.updateDevice);
};

Devices.prototype.getDevice = function(env, next) {
  var id = env.route.params.id;
  var opts = {
    'type':'devices',
    'uuid':id
  };
};

Devices.prototype.register = function(env, next) {

};

Devices.prototype.updateDevice = function(env, next) {

};
