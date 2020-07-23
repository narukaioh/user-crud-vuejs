import client from './client'

export const getUsers = () => {
  return client.get('/user').then(res => res.data)
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

export const loadUserData = () => {
  return client.get('/me').then(res => res.data)
}
