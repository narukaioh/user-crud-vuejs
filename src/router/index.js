import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/Login'
import UserPage from '@/pages/UserPage'
import Register from '@/pages/RegisterPage'
import UpdatePage from '@/pages/UpdatePage'
import beforeEach from './beforeEach'

Vue.use(Router)

const routes = new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    }, {
      path: '/users',
      name: 'Users Page',
      component: UserPage,
      meta: { auth: true }
    }, {
      path: '/signup',
      name: 'Register Page',
      component: Register
    }, {
      path: '/user/:id',
      name: 'Update Page',
      component: UpdatePage,
      meta: { auth: true }
    }
  ]
})

routes.beforeEach(beforeEach)

export default routes
