const User = require('./../../app/models/User')

describe('Unit Tests for User class', () =>{

  test('Create a user object', () =>{
      //Aquí se pone el código que irá en la app
      const user = new User(1, 'AntonioRValdivia', 'Antonio', 'Bio')


      //Aquí validas los resultados de ese código
      //Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha
      expect(user.id).toBe(1)
      expect(user.username).toBe('AntonioRValdivia')
      expect(user.name).toBe('Antonio')
      expect(user.bio).toBe('Bio')
      expect(user.dateCreated).not.toBeUndefined()
      expect(user.lastUpdated).not.toBeUndefined()
  });

  test('Add getters', () =>{
    const user = new User(1, 'AntonioRValdivia', 'Antonio', 'Bio')
    
    expect(user.getUsername).toBe('AntonioRValdivia')
    expect(user.getBio).toBe('Bio')
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
  });

  test('Add setters', () =>{
    const user = new User(1, 'AntonioRValdivia', 'Antonio', 'Bio')

    user.setUsername = 'Antonio'
    expect(user.username).toBe('Antonio')

    user.setBio = 'New Bio'
    expect(user.bio).toBe('New Bio')


  });
})

