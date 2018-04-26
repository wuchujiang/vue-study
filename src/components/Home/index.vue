<template>
  
</template>

<script>
    import { Toast } from 'mint-ui';
    import fetch from '@/utils/request';

    export default {
        name: 'home',
        data() {
            return {

            }
        },
        created() {
            fetch('/sapi/common/getChannelAllConfig')
                .then( res => {
                    console.log(res);
                }
            )
        }
    }
</script>

<style lang="sass" scoped>

</style>

