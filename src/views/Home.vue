<template>
  <!-- home에서의 topbar -->
  <TopBar1 />
  <!-- tactical에서의 topbar -->
  <TopBar2 />

  <MainScreen />
  <SideBar />
</template>

<script lang="ts">
import MainScreen from "../components/home/main/Main.vue";
import TopBar1 from "../components/home/topBar/TopBar1.vue";
import TopBar2 from "../components/home/topBar/TopBar2.vue";
import SideBar from "../components/home/sideBar/SideBar.vue";

export default {
  components: {
    MainScreen,
    SideBar,
    TopBar1,
    TopBar2
  }
};
</script>
