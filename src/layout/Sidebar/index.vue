<template>
  <el-menu
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <SidebarItem v-for="route in constantRoutes" :key="route.path" :item="route" :base-path="route.path" />
  </el-menu>
</template>

<script>
import SidebarItem from "./SidebarItem";
import { constantRoutes } from "@/router";
export default {
  name: "Sidebar",
  components: { SidebarItem },
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