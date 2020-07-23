<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* { box-sizing: border-box; }
input, button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  outline: none;
}

button {
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  outline: none;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  opacity: 0.6;
}

button:active {
  opacity: 0.8;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

* { box-sizing: border-box; }
.login-form, .register-form {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
  width: 80%;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: column;
}

@media (min-width: 650px) {
  .login-form, .register-form {
    width: 350px;
  }
}

.login-form input, .register-form input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
}

.button-options {
  text-align: center;
}
</style>
