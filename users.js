var Users = module.exports = function(ug) {
  this.ug = ug;
}

Users.prototype.init = function(config) {
  config
    .path('/users')
    .get('/{id}', this.getUser)
    .post('/', this.createUser)
    .post('/auth', this.authorize)
    .put('/{id}', this.updateUser);
};

Users.prototype.getUser = function(env, next) {

};

Users.prototype.createUser = function(env, next) {

};

Users.prototype.authorize = function(env, next) {

};

Users.prototype.updateUser = function(env, next) {

};


    
