<template>
    <div class="log-main">
        <div class="find">
            <el-input placeholder="请输入内容" v-model="find">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>

        <el-table
            :height="height"
            :data="list">
            <!-- <el-table-column
                prop="id"
                label="ID"></el-table-column> -->
            <el-table-column
                prop="account"
                label="账号"></el-table-column>
            <el-table-column
                prop="name"
                label="昵称"></el-table-column>
            <el-table-column
                prop="email"
                label="邮箱"></el-table-column>
            <el-table-column
                prop="ip"
                label="ip"></el-table-column>
            <el-table-column
                label="登录时间">
                <template slot-scope="scope">
                    {{moment(scope.row.loginDateTime).format('YYYY-MM-DD HH:mm:ss')}}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style lang="scss" scoped>
.find {
  margin-bottom: 20px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api, { MemberLog } from '../api'
import * as moment from 'moment'

@Component
export default class MemberLogs extends Vue {
    protected logList: MemberLog[] = []

    protected find = ''

    protected moment = moment

    protected height = '100%'

    get list() {
        if (!this.find) {
            return this.logList
        }
        return this.logList.filter(v => {
            return (
                v.name.includes(this.find) ||
                v.account.includes(this.find) ||
                v.email.includes(this.find) ||
                v.ip.includes(this.find)
            )
        })
    }

    protected async created() {
        this.logList = await api.memberLog()
    }

    protected async mounted() {
        await this.$nextTick()
        this.height = document.body.clientHeight - 200 + 'px'
    }
}
</script>