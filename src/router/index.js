import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index'
import Question from '@/components/Question/index';
import Result from '@/components/Result/index';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/question',
      name: 'question',
      component: Question
    }, {
        path: '/result',
        name: 'result',
        component: Result
     }
  ]
})
