<template>
  <el-container class="main-cnt">
    <el-header class="header">
      <v-header>
        <router-link slot="title" to="/">xxxx平台</router-link>
      </v-header>
    </el-header>
    <el-container>
      <v-side-bar></v-side-bar>
      <el-container>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>

