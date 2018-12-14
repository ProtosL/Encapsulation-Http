<template>
    <div class="hello">
        <button @click="testNormal">test-normal</button>
        <button @click="testSlow">test-slow</button>
        <button @click="testErrorData">test-error-data</button>
        <button @click="testErrorCode">test-error-code</button>
        <button @click="testCode403">test-code-403</button>
        <button @click="testCode401">test-code-401</button>
        <p v-if="res">
            {{res}}
        </p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            res: null
        }
    },
    methods: {
        async testNormal () {
            this.res = await this.$http.post('normal')
        },
        async testSlow () {
            this.res = await this.$http.post('slow')
        },
        async testErrorData () {
            try {
                this.res = await this.$http.post('error-data')
            } catch (e) {
                console.log(e)
            }
        },
        async testErrorCode () {
            this.res = await this.$http.post('error-code')
        },
        async testCode403 () {
            this.res = await this.$http.post('code-403')
        },
        async testCode401 () {
            this.res = await this.$http.post('code-401')
        }
    }
}
</script>

<style>
    button {
        padding: 5px 10px;
        background: #6cf;
    }
</style>
