<template>
  <el-container class="container">
    <el-container>
      <el-aside v-if="!isLogin" width="200px">
          <!-- {{title}} -->
            
            <el-menu
                class="sidebar"
                :router="true"
                :default-openeds="[0]"
                :unique-opened="true">
                <el-submenu :index="0">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>菜单</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item :route="{
                            name: 'memberLog'
                        }">
                            用户登录日志
                        </el-menu-item>
                        <el-menu-item :route="{
                            name: 'keyword'
                        }">
                            敏感词
                        </el-menu-item>
                        
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
      </el-aside>
      <el-main>
            <div v-if="!isLogin" class="main-head">
                <el-row>
                    <el-col :span="18">
                        {{title}}
                    </el-col>
                    <el-col :span="6" class="action">
                        <span class="user">{{user.name}}</span>
                        <el-button @click="logout" size="mini">退出</el-button>

                    </el-col>
                </el-row>
            </div>
            <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
html {
    height: 100%;
}
body {
    margin: 0;
    padding: 0;
    height: 100%;
}
.container {
    min-height: 100%;
}
.sidebar {
    height: 100%;
}
.sidebar-title {
    padding: 6px;
}
.main-head {
    width: 100%;
    margin: -20px;
    margin-bottom: 20px;
    padding: 16px;
    border-bottom: solid 1px #e6e6e6;

    .action {
        text-align: right;
        .user {
            padding-right: 12px;
        }
    }
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import env from 'env'
import { getUser, setUser } from './api'

@Component
export default class App extends Vue {
    get isLogin() {
        return this.$route.name === 'login'
    }

    get user() {
        return getUser()
    }

    get title() {
        return env.title
    }

    protected logout() {
        setUser()
        this.$router.push({
            name: 'login'
        })
    }

}
</script>

