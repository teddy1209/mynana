import community from '@/pages/community.vue'
import homepage from '@/pages/homepage.vue'
import identify from '@/pages/identify.vue'
import registration from '@/pages/login/registration'
import myDog from '@/pages/mydog.vue'
import personal from '@/pages/personal.vue'
import photo from '@/pages/photo.vue'
import plan from '@/pages/plan.vue'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'homepage',
        component: homepage
    }, {
        path: '/registration',
        name: 'registration',
        component: registration
    }, {
        path: '/personal',
        name: 'personal',
        component: personal
    }, {
        path: '/myDog',
        name: 'myDog',
        component: myDog
    }, {
        path: '/community',
        name: 'community',
        component: community
    }, {
        path: '/identify',
        name: 'identify',
        component: identify
    }, {
        path: '/photo',
        name: 'photo',
        component: photo
    }, {
        path: '/plan',
        name: 'plan',
        component: plan
    }]
})
