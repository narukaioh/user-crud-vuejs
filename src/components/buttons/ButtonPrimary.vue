<template>
  <button type="button" @click="execute()" class="primary">{{ label }}</button>
</template>

<script>
export default {
  name: 'ButtonPrimary',
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
.primary {
  background-color: #000;
  color: #FFF;
}

</style>
