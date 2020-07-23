<template>
  <div class="button-options">
    <button-primary label="Enviar" />
    <button-secondary label="Limpar" />
  </div>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'

export default {
  name: 'Button Options',
  components: {
    ButtonPrimary,
    ButtonSecondary
  }
}
</script>

<style>

</style>
