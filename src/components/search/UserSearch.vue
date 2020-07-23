<template>
  <div class="user-search">
    <span>Search:</span>
    <input type="text" placeholder="Looking for ..."/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.user-search {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px dashed #ccc;
}

.user-search input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}
</style>
