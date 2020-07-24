<template>
  <div class="options">
    <span class="remove" @click="remove">Remove</span>
    <router-link :to="`/user/${id}`" class="edit">Edit</router-link>
  </div>
</template>

<script>
import { removeUser } from '@/services/user'
export default {
  name: 'Options',
  props: {
    id: String
  },
  methods: {
    remove () {
      removeUser(this.id).then(res => console.log(res))
    }
  }
}
</script>

<style>

</style>
