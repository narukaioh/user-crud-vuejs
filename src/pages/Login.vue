<template>
  <div>
    <form class="login-form">
      <span>Email:</span>
      <input type="email" v-model="user.email" />

      <span>Password:</span>
      <input type="password" v-model="user.password" />

      <div class="button-options">
        <button-primary
          label="Sign in"
          :callback="signin(user)" />

        <button-secondary
          label="Clean"
          :callback="clear(user)" />
      </div>

    </form>
    <p>Create a new account! <router-link to="/signup">Sign up</router-link></p>
    <p>developed by <a href="https://github.com/narukaioh" target="_blank">judantas</a> © 2020</p>

  </div>
</template>

<script>
import { login } from '@/services/user'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  components: {
    ButtonPrimary,
    ButtonSecondary
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.token !== ''
    })
  },
  methods: {
    ...mapActions(['login', 'logout']),

    clear (user) {
      return () => {
        this.user = { email: '', password: '' }
      }
    },

    signout () {
      this.logout()
    },

    signin (user) {
      return () => {
        login(user).then(res => {
          if (res.user) {
            const { name, email } = res.user
            const token = res.token

            this.login({
              user: { name, email },
              token
            })
            this.$router.push('/users')
          } else {
            console.log(new Error('problema com login'))
          }
        })
      }
    }
  }
}
</script>
