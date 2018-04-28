<template>
  <div :style="styzz" @click="press" class="btn"></div>
</template>

<script>
    export default {
        name: 'press',
        props: ['submit', 'styzz', 'btnEvent'],
        methods: {
            press() {
                this.$emit('btnEvent');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn{
        width: 200px;
        height: 100px;
        background: url('../../style/image/start.png') no-repeat;
        background-size: 100%;
        position: absolute;
        left: 50%;
        bottom: 30%;
        transform: translateX(-50%);
    }
</style>

