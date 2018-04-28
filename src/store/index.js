import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    question: [{
        title: '题目1',
        answer: ['111答案1', '111答案2', '111答案3','111答案4'],
        solution: '',
        rightKey: 1
    }, {
        title: '题目2',
        answer: ['222答案1', '222答案2', '222答案3','222答案4'],
        solution: '',
        rightKey: 1
    }, {
        title: '题目3',
        answer: ['333答案1', '333答案2', '333答案3','333答案4'],
        solution: '',
        rightKey: 1
    }, {
        title: '题目4',
        answer: ['444答案1', '444答案2', '444答案3','444答案4'],
        solution: '',
        rightKey: 1
    }, {
        title: '题目5',
        answer: ['555答案1', '555答案2', '555答案3','555答案4'],
        solution: '',
        rightKey: 1
    }, {
        title: '题目6',
        answer: ['666答案1', '666答案2', '666答案3','666答案4'],
        solution: '',
        rightKey: 1
    }],
    count: 0,
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
