<template>
  <button class="primary">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button Primary',
  props: {
    label: String
  }
}
</script>

<style>
.primary {
  background-color: #000;
  color: #FFF;
}

</style>
