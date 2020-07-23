<template>
  <div class="user-page">
    <user-search></user-search>
    <user-list></user-list>
  </div>
</template>

<script>
import UserList from '@/components/lists/UserList'
import UserSearch from '@/components/search/UserSearch'

export default {
  name: 'Users Page',
  components: {
    UserList,
    UserSearch
  }
}
</script>

<style>
.user-page {
  width: 80%;
  margin: 0 auto;
}

.edit, .remove {
  border: 1px solid;
  padding: 10px;
  display: inline-block;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.edit {
  color: green;
}

.remove {
  color: brown;
}

.options {
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px dashed #ccc;
  width: 100%;
  text-align: left;
}

@media (min-width: 850px) {
  .options {
    width: auto;
    margin-top: 0px;
    padding: 0px;
    border: none;
  }
}

</style>
