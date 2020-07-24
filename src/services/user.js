import client from './client'

export const getUsers = () => client.get('/user').then(res => res.data)

export const getUser = (id) => client.get(`/user/${id}`).then(res => res.data)

export const signUp = (user) => client.post('/signup', user).then(res => res.data)

export const removeUser = (id) => client.delete(`/user/${id}`).then(res => res.data)

export const updateUser = (id, user) => {
  console.log(id, user)
  return client.put(`/user/${id}`, user).then(res => res.data)
}
export const login = user => {
  const credentials = btoa(`${user.email}:${user.password}`)
  client.defaults.headers.authorization = `basic ${credentials}`
  return client.get('/login').then(res => res.data)
}

export const setTokenHeader = token => {
  client.defaults.headers.authorization = `Bearer ${token}`
}

export const removeTokenHeader = () => {
  client.defaults.headers.authorization = ''
}

export const loadUserData = () => client.get('/me').then(res => res.data)
