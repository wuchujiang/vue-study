<template>
    <section class="question">
        <headertop text="text"></headertop>
        <press @btnEvent="btnEvent" :styzz="{backgroundImage: 'url(' + require('../../style/image/next.png') + ')'}"></press>
        <section class="quest-wrap">
            <p>{{ questionItem.title }}</p>
            <ul >
                <li v-for="(item, index) in questionItem.answer" :key="index" :class="{active: index===checkIndex}" @click="checkAnswer(index)">
                    <span class="rate">{{ transNum(index) }}</span>
                    <span>{{ item }}</span>
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
    import headertop from '../Common/header';
    import press from '../Common/press';
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'question',
        components: {headertop, press},
        data() {
            return {

            }
        },

        methods: {
            btnEvent(e) {
                this.$router.push('question');
            },
            transNum(num) {
                if(typeof num !== 'number') {
                    num = Number(num);
                }
                return String.fromCharCode(65 + num);
            },
            checkAnswer(index) {
                this.checkedQuestion(index);
            },
            btnEvent() {
                const questionItem = this.questionItem;
                if(questionItem.solution === '') {
                    alert('请选择答案');
                }else if(this.count === this.getQuestionLength - 1) {
                    this.$router.push('/result');
                } else {
                    this.nextQuestion();
                }
            },
            ...mapActions(['checkedQuestion', 'nextQuestion'])
        },

        computed: {
            ...mapState({
                questionItem: state => {
                    const { question, count } = state;
                    return question[count];
                },
                checkIndex: state => {
                    const { question, count } = state;
                    return question[count].solution;
                },
                getQuestionLength: state => state.question.length,
                count: state => state.count
            }),
            
        }

    }
</script>

<style lang="scss" scoped>
    .question{
        padding-top: 50%;
        .quest-wrap{
            width: 60%;
            margin: 0 auto;
        }
        ul{
            li{
                line-height: 80px;                
                span{
                    display: inline-block;
                    vertical-align: middle;
                }
                .rate{
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 50%;
                    border: 1px solid #333;
                    margin-right: 10px;
                }
                &.active{
                    .rate{
                        border-color: red;
                    }

                    span{
                        color: red;
                    }
                }
            }
        }
    }
</style>

