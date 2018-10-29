<template>
  <el-container>
    <el-container>
      <el-aside v-if="!isLogin" width="200px">Aside</el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { isLogin } from './api'

@Component
export default class App extends Vue {
    get isLogin() {
        return this.$route.name === 'login'
    }
}
</script>

