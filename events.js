var Events = module.exports = function(ug) {
  this.ug = ug;
};

Events.prototype.init = function(config) {
  config
    .post('/', this.createEvent);
};

Events.prototype.createEvent = function(env, next) {

};
