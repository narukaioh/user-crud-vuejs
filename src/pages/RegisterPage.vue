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

    <div class="button-options">
      <button-primary></button-primary>
      <button-secondary></button-secondary>
    </div>
  </form>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'

export default {
  name: 'Login',
  components: {
    ButtonPrimary,
    ButtonSecondary
  }
}
</script>
