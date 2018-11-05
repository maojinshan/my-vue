<template>

  <el-aside width="200px">
    <el-scrollbar style="height:100%">
      <el-menu :default-active="defaultActive" :router="true">
        <el-submenu v-for="(menu, key) in menus" :index="menu.index" :key="key">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span>{{menu.title}}</span>
          </template>
          <el-menu-item v-for="(item, subKey) in menu.children" :index="item.index" :key="subKey">{{item.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import { menus } from './index.config.js'
export default {
  name: 'v-side-bar',
  data () {
    return {
      menus
    }
  },
  computed: {
    defaultActive: function () {
      return '/'
    }
  }
}
</script>

