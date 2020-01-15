<template >
  <div>
    <ul v-for="site in sites" v-bind:key="site.id">
      <li v-if="site.owner == get_add_new_user_id()">
        {{site.title}}
        <p class="change_site_id" v-on:click="new_site_id(site.id)">Info>></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store/";

export default {
  name: "app",
  data() {
    return {
      sites: []
    };
  },
  created() {
    axios.get("http://localhost:3000/sites").then(response => {
      this.sites = response.data;
    });
  },
  methods: {
    //Commits new site_id to the store 
    new_site_id(site_id) {
      store.commit("add_new_site_id", site_id);
    },
    //Retrives the existing user_id from the store.  
    get_add_new_user_id() {
      return this.$store.getters.get_user_id;
    }
  }
};
</script>

<style>
.change_site_id {
  color: blue;
  cursor: pointer;
}
</style>

