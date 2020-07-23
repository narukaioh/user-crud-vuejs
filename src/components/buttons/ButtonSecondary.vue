<template>
  <button class="secondary">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button Secondary',
  props: {
    label: String
  }
}
</script>

<style>

.secondary {
  background-color: cadetblue;
  color: white;
}

</style>
