<template>
  <div>
      你的分数 {{ getCore }}
  </div>
</template>

<script> 
    import { mapState } from 'vuex';

    export default {
        name: 'result',
        data() {
            return {
            }
        },
        methods: {

        },
        computed: {
            ...mapState({
                getCore: state => {
                    const question = state.question;
                    let core = 0; 
                    question.forEach((v, k) => {
                        if(v.solution === v.rightKey) {
                            core += 10;
                        }
                    });
                    return core;
                }
            })
        }
    }
</script>
