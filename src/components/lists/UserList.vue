<template>
  <ul class="user-list">
    <user-item
      v-for="(user, index) in users"
      :key="index"
      :item="user"
    />
  </ul>
</template>

<script>
import UserItem from './UserItem'

export default {
  name: 'UserList',
  props: {
    users: Array
  },
  components: {
    UserItem
  }
}
</script>

<style>

.user-list {
  list-style: none;
  padding: 0;
}

.user-list li {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

@media (min-width: 850px) {
  .user-list li {
    flex-direction: row;
    align-items: center;
  }
}
</style>
