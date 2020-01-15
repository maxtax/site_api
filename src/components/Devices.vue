<template>
  <div>
    <div v-for="device in devices" v-bind:key="device.id">
      <div v-if="device.site_id == new_siteid()">
        <h3>{{device.title}}</h3>
        <p>{{device.description}}</p>
        <p>
          <b>Version:</b>
          {{device.version}} ||
          <b>Model:</b>
          {{device.model}}
        </p>
        <p v-if="device.enabled">
          <b>Enebled:</b> Yes
        </p>
        <p v-else>
          <b>Enebled:</b> No
        </p>
        <p v-if="device.connected">
          <b>Connected:</b> Yes
        </p>
        <p v-else>
          <b>Enebled:</b> No
        </p>
        <p>
          <b>Timezone:</b>
          {{device.timezone}}
        </p>
        <p>
          <b>Storages:</b>
        </p>
        <p v-for="unit in device.storages" v-bind:key="unit.id">{{unit.id}}[{{unit.state}}]</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "devices",
  data() {
    return {
      devices: []
    };
  },
  created() {
    axios.get("http://localhost:3000/devices").then(response => {
      this.devices = response.data;
    });
  },
  //Retrive the state of site_id
  methods: {
    new_siteid() {
      return this.$store.getters.get_site_id;
    }
  }
};
</script>

<style>
p {
  margin: 0.3rem;
}
h3 {
  margin-bottom: 0.5rem;
}
</style>
