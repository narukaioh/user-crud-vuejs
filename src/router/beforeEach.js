import store from '@/store'

const needAuth = auth => auth === true

const auth = (to, from, next) => {
  const auth = to.meta.auth
  // Verifica se é uma rota que necessita de autenticacao
  if (!needAuth(auth)) {
    next()
    return
  }
  // caso a rota necessite de autenticacao, verificar o token do usuario
  store
    .dispatch('checkUserToken')
    .then(() => {
      next()
    })
    .catch(() => {
      next({ name: 'Login' })
    })
}

export default auth
