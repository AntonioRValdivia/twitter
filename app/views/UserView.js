const UserService = require('./../services/UserService')

class UserView{
  static createUser(payload){
    if (payload == null) {
      return {error: 'payload no existe'}
    } else if (payload.username == null || payload.name == null || payload.id == null) {
      return {error: 'necesitan tener un valor válido'}
    } else if (payload.username == false || payload.name == false || payload.id == false){
      return {error: 'necesitan tener un valor'}
    } else {
      return UserService.create(payload.id, payload.username, payload.name)
    }

  }
}


module.exports = UserView