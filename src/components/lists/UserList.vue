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
  name: 'User List',
  components: {
    UserItem
  },
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'Ju Dantas',
          email: 'jucienyds@gmail.com'
        }, {
          id: 2,
          name: 'Luana da Rosa',
          email: 'luanadrosa@gmail.com'
        }
      ]
    }
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
