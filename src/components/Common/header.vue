<template>
  <section class="header">
      <p>{{ text }}</p>
  </section>
</template>

<script>
    export default {
        name: 'headertop',
        props: ['text']
    }
</script>

<style lang="scss" scoped>
    .header{
        width: 148px;
        height: 296px;
        background: url('../../style/image/header_bg.png') no-repeat;
        background-size: cover;
        position: fixed;
        left: 70%;
        top: 0;
        p{
            text-align: center;
            font-size: 34px;
            padding-top: 220px;
        }
    }
</style>

