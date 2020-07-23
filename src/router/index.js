import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/Login'
import UserPage from '@/pages/UserPage'
import Register from '@/pages/RegisterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    }, {
      path: '/users',
      name: 'Users Page',
      component: UserPage
    }, {
      path: '/signup',
      name: 'Register Page',
      component: Register
    }
  ]
})
