<template>
  <button type="button" @click="execute()" class="secondary">{{ label }}</button>
</template>

<script>
export default {
  name: 'ButtonSecondary',
  props: {
    label: String,
    callback: Function
  },
  methods: {
    execute () {
      this.callback()
    }
  }
}
</script>

<style>

.secondary {
  background-color: cadetblue;
  color: white;
}

</style>
