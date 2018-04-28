import { QUESTION_CHECK, QUESTION_NEXT_ANSWER } from './types';

export default {
    checkedQuestion({ commit }, index) {
        commit(QUESTION_CHECK, index);
    },

    nextQuestion({ commit }) {
        commit(QUESTION_NEXT_ANSWER);
    }
}