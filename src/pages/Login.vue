<template>
  <form class="login-form">
    <span>Email:</span>
    <input type="email" v-model="user.email" />

    <span>Password:</span>
    <input type="password" v-model="user.password" />

    <div class="button-options">
      <button-primary
        label="Enviar"
        :callback="signin(user)" />

      <button-secondary
        label="Limpar"
        :callback="clear(user)" />
    </div>

    <router-link to="/signup">Signup</router-link>
  </form>
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
        console.log(user.email)
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
