<template>
  <div id="app">
    <section class="content">
      <div class="columns">
        <div class="second-column">
          <Sites />
        </div>
        <div class="third-column">
          <Devices />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Sites from "@/components/Sites.vue";
import Devices from "@/components/Devices.vue";

export default {
  name: "site_service",
  components: {
    Sites,
    Devices
  },
  data() {
    return {
      site_id: 0
    };
  }
};
</script>

<style>
body {
  margin: 0;
}
.wrapper {
  min-height: 100vh;
  background: #ccc;
  display: flex;
  flex-direction: column;
}
.header,
.footer {
  height: 50px;
  background: #666;
  color: #fff;
}
.content {
  display: flex;
  flex: 1;
  background: #999;
  color: #000;
}
.columns {
  display: flex;
  flex: 1;
}
.first-column {
  flex: 1;
  order: 1;
  background: #eee;
}
.second-column {
  flex: 1;
  background: #ccc;
  order: 2;
}
.third-column {
  flex: 1;
  order: 3;
  background: #ddd;
}
ul {
  list-style: none;
}
</style>