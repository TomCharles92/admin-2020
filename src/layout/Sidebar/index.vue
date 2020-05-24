<template>
  <el-menu
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <MenuItem v-for="route in constantRoutes" :key="route.path" :item="route" />
  </el-menu>
</template>

<script>
import MenuItem from "./MenuItem";
import { constantRoutes } from "@/router";
export default {
  name: "Sidebar",
  components: { MenuItem },
  computed: {
    constantRoutes() {
      return constantRoutes;
    }
  },
  created() {
    console.log(constantRoutes);
  }
};
</script>