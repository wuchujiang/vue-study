<template>
    <section class="home">
        <headertop text="首页"></headertop>
        <press @btnEvent="btnEvent"></press>
    </section>
</template>

<script>
    import { Toast } from 'mint-ui';
    import fetch from '@/utils/request';
    import headertop from '../Common/header';
    import press from '../Common/press';
    export default {
        name: 'home',
        components: {
            headertop, press
        },
        data() {
            return {
            }
        },
        methods: {
            btnEvent(e) {
                this.$router.push('question');
            }
        },
        created() {
            
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        width: 100%;
        height: 100%;
        background: url('../../style/image/home.jpg') no-repeat;
        background-size: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>

