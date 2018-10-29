<template>
    <div class="login">
        <div class="wrap" v-loading="isLoading">

            <div class="title">
                {{title}}
            </div>
            <el-form 
                ref="form"
                :model="data"
                :rules="rules"
                class="form"
                label-width="60px">
                <el-form-item label="账号" prop="name">
                    <el-input v-model="data.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="data.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .login {
        display: flex;
        width: 100%;
        height: 90vh;
    }

    .wrap {
        margin: auto;
    }

    .title {
        font-size: 30px;
        text-align: center;
        padding: 12px;
        margin-bottom: 20px;
    }
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api, { LoginReq } from '../api'
import env from 'env'

@Component
export default class Login extends Vue {
    public $refs!: {
        form: Vue & {
            // @ts-ignore
            validate(Function): void
        }
    }

    protected isLoading = false

    protected data: LoginReq = {
        name: '',
        password: ''
    }

    get title() {
        return env.title
    }

    protected rules = {
        name: [{ required: true }],
        password: [{ required: true }]
    }

    protected login() {
        this.$refs.form.validate(async (valid: boolean) => {
            if (!valid) {
                return
            }
            this.isLoading = true
            try {
                let res = await api.login(this.data)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>

