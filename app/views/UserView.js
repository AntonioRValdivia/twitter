const UserService = require('./../services/UserService')

class UserView{
  static createUser(payload){
    const result = {}
    if (payload == null) {
      result.error = 'payload no existe'
    } else if (payload.username == null || payload.name == null || payload.id == null) {
      result.error = 'necesitan tener un valor válido'
    } else if (payload.username == false || payload.name == false || payload.id == false){
      result.error = 'necesitan tener un valor'
    } else if (payload.username == true && payload.name == true && payload.id == true){
      result = UserService.create(payload)
    }
    
    return result
  }
}



module.exports = UserView