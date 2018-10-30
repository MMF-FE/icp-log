<template>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { isLogin } from '../api'

@Component
export default class Home extends Vue {
    protected created() {
        if (isLogin()) {
            this.$router.replace({
                name: 'memberLog'
            })
        }
    }
}
</script>
