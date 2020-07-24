<template>
  <form class="register-form">
    <span>Name:</span>
    <input type="text" v-model="user.name" />

    <span>Email:</span>
    <input type="email" v-model="user.email" />

    <span>Password:</span>
    <input type="password" v-model="user.password" />

    <span>Confirm Password:</span>
    <input type="password" v-model="user.cpassword" />

    <div class="button-options">
      <button-primary
        label="Send"
        :callback="createUser(user)" />

      <button-secondary
        label="Clear form"
        :callback="clear(user)" />
    </div>
  </form>
</template>

<script>
import { signUp } from '@/services/user'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'

export default {
  name: 'Login',
  components: {
    ButtonPrimary,
    ButtonSecondary
  },
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        cpassword: ''
      }
    }
  },
  methods: {
    createUser (user) {
      return () => {
        const { name, email, password } = user
        signUp({
          name, email, password
        }).then(res => {
          console.log(res)
          this.$router.push('/users')
        })
      }
    },
    clear (user) {
      return () => {
        this.user = {
          name: '',
          email: '',
          password: '',
          cpassword: ''
        }
      }
    }
  }
}
</script>
