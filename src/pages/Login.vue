<template>
  <form class="login-form">
    <span>Email:</span>
    <input type="email" />

    <span>Password:</span>
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
