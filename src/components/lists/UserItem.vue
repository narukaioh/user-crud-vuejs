<template>
  <li>
    <strong>{{ item.name }}</strong>
    <span>{{ item.email }}</span>
    <options :id="item.id"></options>
  </li>
</template>

<script>
import Options from '@/components/toolbar/Options'
export default {
  name: 'User Item',
  props: {
    item: Object
  },
  components: {
    Options
  }
}
</script>

<style>

</style>
