import { QUESTION_CHECK, QUESTION_NEXT_ANSWER } from './types';

export default {
    [QUESTION_CHECK](state, index) {
        const count = state.count;
        state.question[count].solution = index;
    },

    [QUESTION_NEXT_ANSWER](state) {
        state.count++;
    }
}