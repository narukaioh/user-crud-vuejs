export default {
  LOGIN (state, payload) {
    state.user = payload.user
    state.token = payload.token
  },
  LOGOUT (state) {
    state.user = { id: '', email: '' }
    state.token = ''
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_USER (state, user) {
    state.user.id = user.id
    state.user.email = user.email
  }
}
