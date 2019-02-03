import Vue from 'vue'
import Router from 'vue-router'
import nana from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nana',
      component: nana
    }
  ]
})
