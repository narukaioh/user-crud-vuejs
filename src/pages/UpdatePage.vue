<template>
  <div class="update-page">
    <h1>Edit</h1>
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
          label="Save changes"
          :callback="update" />

        <button-secondary
          label="Clear form"
          :callback="clear" />
      </div>
    </form>
    <router-link to="/users">Back to User List page</router-link>
  </div>
</template>

<script>
import { getUser, updateUser } from '@/services/user'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'

export default {
  name: 'UpdatePage',
  components: {
    ButtonPrimary,
    ButtonSecondary
  },
  created () {
    getUser(this.$route.params.id).then(res => {
      this.user = res.user
    })
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
    update () {
      const { name, email, password } = this.user
      updateUser(this.$route.params.id, { name, email, password })
        .then(res => console.log(res))
    },
    clear () {
      this.user = {
        name: '',
        email: '',
        password: '',
        cpassword: ''
      }
    }
  }
}
</script>
