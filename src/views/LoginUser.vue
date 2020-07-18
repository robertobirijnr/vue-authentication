<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input v-model="email" type="text" name="email" />

      <label for="password">Password</label>
      <input v-model="password" type="text" name="password" />

      <button type="submit" name="button">Loging</button>
      <p>{{error}}</p>
      <router-link to="/register">Don't have an Account? Register</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error:null
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        }).catch(err =>{
          this.error = err.response.data.error
        })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>