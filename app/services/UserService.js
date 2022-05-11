const User = require('./../models/User')

class UserService {
  static create({id, username, name}){
    return new User(id, username, name, 'Sin bio')
  }

  static getInfo({id, username, name, bio}){
      return [id, username, name, bio]
  }

  static updateUserUsername(user, newUsername){
          user.username = newUsername
  return  user  
  }

  static getAllUsernames([user1, user2, user3]){
    return [user1.username, user2.username, user3.username]
  }
}

module.exports = UserService