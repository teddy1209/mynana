import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/pages/homepage'
import registration from '@/pages/login/registration'
import personal from '@/pages/personal'
import myDog from '@/pages/pets/mydog'
import community from '@/pages/community';
import dogIdentification from '@/pages/identification/dogs';
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/myDog',
      name: 'myDog',
      component: myDog
    }, {
      path: '/community',
      name: 'community',
      component: community
    }, {
      path: '/identification/dogs',
      name: 'dogIdentification',
      component: dogIdentification
    }
  ]
})
