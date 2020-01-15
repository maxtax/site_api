<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store/";

export default {
  name: "Login",
  data() {
    return {
      users: [],
      id: null,
      input: {
        username: "",
        password: ""
      }
    };
  },
  created() {
    store.commit("add_new_user_id", ""), store.commit("add_new_site_id", 0);
  },
  methods: {
    //Handles a mock login.
    login() {
      axios.get("http://localhost:3000/users").then(response => {
        this.users = response.data;
        for (var index in this.users) {
          if (
            this.users[index].username != undefined &&
            this.users[index].username == this.input.username
            //&& this.users[index].password == this.input.password
          ) {
            store.commit("add_new_user_id", this.users[index].username);
            this.$router.replace({ name: "sites" });
          }
        }
      });
    }
  }
};
</script>

<style>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>