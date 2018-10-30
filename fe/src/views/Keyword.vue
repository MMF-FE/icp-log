<template>
    <div class="log-main">
        <div class="find">
        </div>

        <el-table
            :height="height"
            :data="list">
            <el-table-column
                prop="id"
                label="ID"></el-table-column>
            <el-table-column
                prop="keyword"
                label="敏感词"></el-table-column>
            <el-table-column
                label="添加时间">
                <template slot-scope="scope">
                    {{moment(scope.row.creatDate).format('YYYY-MM-DD HH:mm:ss')}}
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
import { Component, Vue } from "vue-property-decorator"
import api, { Keyword } from "../api"
import * as moment from 'moment'

@Component
export default class Keywords extends Vue {
    protected list: Keyword[] = []

    protected find = ''

    protected moment = moment

    protected height = '100%' 

    protected async created() {
        this.list = await api.keyword()
    }

    protected async mounted() {
        await this.$nextTick()
        this.height = document.body.clientHeight - 150 + 'px'
    }
}
</script>