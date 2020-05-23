<template>
  <div class="layout">
    <!-- sidebar -->
    <Sidebar class="sidebar-container" />
    <div class="right-container">
      <!-- nav-bar -->
      <div class="navbar-container">Nav</div>
      <!-- 主内容 -->
      <AppMain class="appmain-container" />
    </div>
  </div>
</template>

<script>
import AppMain from "./AppMain";
import Sidebar from "./Sidebar/index";
export default {
  name: "Layout",
  components: { AppMain, Sidebar }
};
</script>