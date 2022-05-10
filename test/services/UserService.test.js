const UserService = require('./../../app/services/UserService')

describe('Tests for UserService', ()=>{
  
  test('1. Create a new user using UserService', () =>{

    const user = UserService.create(1, 'AntonioRValdivia', 'Antonio')

    expect(user.username).toBe('AntonioRValdivia')
    expect(user.name).toBe('Antonio')
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  });

  test('2. Get all user data in a list', () =>{
    const user = UserService.create(1, 'AntonioRValdivia', 'Antonio')
    const userInfoList = UserService.getInfo(user)

    expect(userInfoList[0]).toBe(1)
    expect(userInfoList[1]).toBe('AntonioRValdivia')
    expect(userInfoList[2]).toBe('Antonio')
    expect(userInfoList[3]).toBe('Sin bio')
  });

  test('3. Update username', () =>{
    const user = UserService.create(1, 'AntonioRValdivia', 'Antonio')
    UserService.updateUserUsername(user, 'JARV')

    expect(user.username).toBe('JARV')
   
  });

  test('4. Given a list of users give me the list of usernames', () =>{
    const user1 = UserService.create(1, 'AntonioRValdivia1', 'Antonio')
    const user2 = UserService.create(1, 'AntonioRValdivia2', 'Antonio')
    const user3 = UserService.create(1, 'AntonioRValdivia3', 'Antonio')
    
    const usernames = UserService.getAllUsernames([user1, user2, user3])

    expect(usernames).toContain('AntonioRValdivia1')
    expect(usernames).toContain('AntonioRValdivia2')
    expect(usernames).toContain('AntonioRValdivia3')
   
  });

})