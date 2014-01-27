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

};

Devices.prototype.register = function(env, next) {

};

Devices.prototype.updateDevice = function(env, next) {

};
