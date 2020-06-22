import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Tang from '@/pages/tang/Tang'
import Fizz from '@/pages/fizz/fizz'
import Enter from '@/pages/fizz/components/components/enter'
import Login from '@/pages/fizz/components/components/login'
import Target from '@/pages/target/target'
import BarOne from '@/pages/target/components/components/barComponents/barOne'
import BarTwo from '@/pages/target/components/components/barComponents/barTwo'
import BarThree from '@/pages/target/components/components/barComponents/barThree'
import BarFour from '@/pages/target/components/components/barComponents/barFour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list/:id',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/tang',
      name: 'tang',
      component: Tang
    },
    {
      path: '/target',
      redirect: '/target/barone',
      meta: {index: 2, title: 'Target Material Design Bootstrap Admin Template'},
      name: 'target',
      component: Target,
      children: [{
        path: 'barone',
        meta: {index: 1, title: 'Target Material Design Bootstrap Admin Template'},
        name: 'barone',
        component: BarOne
      },
      {
        path: 'bartwo',
        meta: {index: 2, title: 'Target Material Design Bootstrap Admin Template'},
        name: 'bartwo',
        component: BarTwo
      },
      {
        path: 'barthree',
        meta: {index: 3, title: 'Target Material Design Bootstrap Admin Template'},
        name: 'barthree',
        component: BarThree
      },
      {
        path: 'barfour',
        meta: {index: 4, title: 'Target Material Design Bootstrap Admin Template'},
        name: 'barfour',
        component: BarFour
      }
      ]
    },
    {
      path: '/fizz',
      name: 'fizz',
      component: Fizz,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'enter',
        name: 'enter',
        component: Enter
      }]
    }
  ],
  // 路由跳转的滚动行为
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
