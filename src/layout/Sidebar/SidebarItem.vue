<template>
  <div v-if="!item.hidden">
    <!-- 只有一个子路由 && (没有子路由 || 不展示子路由) && 使用嵌套路由  -->
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
    >
      <el-menu-item index="item.path">
        <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
      </el-menu-item>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <!-- 显示 icon 和 title -->
        <Item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <!-- 回调自己 -->
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import Item from "./Item";
export default {
  name: "SidebarItem",
  components: { Item },
  props: {
    item: {
      type: Object,
      required: true
    },
    // 不知道干嘛的，是否嵌套？
    isNest: {
      type: Boolean,
      default: false
    },
    // 当前路由的路径
    basePath: {
      type: String,
      default: ""
    }
  },
  methods: {
    // 计算：是否只有一个子路由
    hasOneShowingChild(children = [], parent) {
      // 筛选子路由，去掉要隐藏的
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          // 临时赋值，如果只有一个子路由，则会被使用。否则会被覆盖
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      // 只有一个子路由
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      // 没有子路由，直接显示父路由
      if (showingChildren.length === 0) {
        // 将父路由赋值给
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        
        return true;
      }

      return false;
    },

    // 计算：路由路径
    resolvePath(routePath) {
      // if (isExternal(routePath)) {
      //   return routePath
      // }
      // if (isExternal(this.basePath)) {
      //   return this.basePath
      // }
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>