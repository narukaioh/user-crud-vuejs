<template>
  <form class="register-form">
    <span>Name:</span>
    <input type="text" />

    <span>Email:</span>
    <input type="email" />

    <span>Password:</span>
    <input type="password" />

    <span>Confirm Password:</span>
    <input type="password" />

    <button-options />
  </form>
</template>

<script>
import ButtonOptions from '@/components/toolbar/ButtonOptions'

export default {
  name: 'Login',
  components: {
    ButtonOptions
  }
}
</script>
