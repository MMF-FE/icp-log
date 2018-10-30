<template>
    <div class="log-main">
        <div class="find">
            <el-input placeholder="请输入敏感词" v-model="keyword">
                <el-button slot="append" @click="add">添加</el-button>
            </el-input>
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
import { Component, Vue } from 'vue-property-decorator'
import api, { Keyword } from '../api'
import * as moment from 'moment'

@Component
export default class Keywords extends Vue {
    protected list: Keyword[] = []

    protected keyword = ''

    protected moment = moment

    protected height = '100%'

    protected isLoading = false

    protected async created() {
        this.list = await api.keyword()
    }

    protected async mounted() {
        await this.$nextTick()
        this.height = document.body.clientHeight - 200 + 'px'
    }

    protected async add() {
        let keyword = this.keyword.trim()
        if (!keyword) {
            return Vue.prototype.$notify.error({
                title: '发生错误了',
                message: '敏感词不能为空'
            })
        }
        this.isLoading = true
        try {
            await api.addKeyword({
                keyword
            })
            this.keyword = ''
            this.list = await api.keyword()
            Vue.prototype.$notify.success('添加成功')
        } catch (error) {
        }
        this.isLoading = false
    }
}
</script>