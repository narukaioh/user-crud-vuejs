import localforage from 'localforage'
import { isEmpty } from 'lodash'
import {
  setTokenHeader,
  removeTokenHeader,
  loadUserData
} from '../services/user'

export const setToken = ({ commit }, payload) => {
  const token = isEmpty(payload) ? null : payload.token || payload
  commit('SET_TOKEN', token)
  setTokenHeader(token)
  return Promise.resolve(token)
}

export const login = ({ commit }, payload) => {
  // adiciona o token no state
  commit('LOGIN', payload)
  // adiciona o token no header
  setTokenHeader(payload.token)
  // adiciona o token no localstorage
  localforage.setItem('APP_USER_TOKEN', payload.token)
}

export const logout = ({ commit }) => {
  // retira o token no state
  commit('LOGOUT')
  // remove o token do header
  removeTokenHeader()
  // retira o token no localstorage
  localforage.removeItem('APP_USER_TOKEN')
}

export const checkUserToken = ({ dispatch, state }) => {
  // verifica se o token no vuex não está vazio
  if (!isEmpty(state.token)) {
    return Promise.resolve(state.token)
  }

  /* Caso o token não exista no vuex
     recuperar ele do localstorage
    recuperar tambem o usuario e validação do token */

  return localforage
    .getItem('APP_USER_TOKEN')
    .then(token => {
      if (isEmpty(token)) {
        return Promise.reject(new Error('NO_TOKEN'))
      }
      // seta o token no store
      return dispatch('setToken', token)
    })
    .then(() => dispatch('loadUser'))
}

export const setUser = ({ commit }, user) => {
  commit('SET_USER', user)
}

export const loadUser = ({ dispatch }) => {
  loadUserData()
    .then(user => {
      dispatch('setUser', user)
    })
    .catch(() => {
      dispatch('setToken', '')
      return Promise.reject(new Error('FAIL_IN_LOAD_USER'))
    })
}
