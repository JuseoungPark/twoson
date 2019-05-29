import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const Portfolio = () => import(/* webpackChunkName: "portfolio" */ '@/views/Portfolio')
const Solution = () => import(/* webpackChunkName: "solution" */ '@/views/Solution')
const News = () => import(/* webpackChunkName: "news" */ '@/views/News')

// 포트폴리오 타입
const project = () => import(/* webpackChunkName: "project" */ '@/components/typeofproject/PF01')
// const projectC = () => import(/* webpackChunkName: "complete" */ '@/components/typeofproject/PF02')
const projectP = () => import(/* webpackChunkName: "propose" */ '@/components/typeofproject/PF03')

// 솔루션 포스트
const Post = () => import(/* webpackChunkName: "solution-post" */ '@/views/post/PostOfSolution')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about-name',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/portfolio/project',
      name: 'pj-i-name',
      component: Portfolio,
      // 하위 경로 (포트폴리오 타입)
      children: [
        {
          path: '/portfolio/project',
          name: 'pj-i-name',
          component: project,
        },
        // {
        //   path: '/portfolio/complete',
        //   name: 'pj-c-name',
        //   component: projectC,
        // },
        {
          path: '/portfolio/propose',
          name: 'pj-p-name',
          component: projectP,
        },
      ],
    },
    {
      path: '/solution',
      name: 'solution-name',
      component: Solution,
      // children: [
      //   {
      //     path: '/solution/:id',
      //     name: 'solution-post-name',
      //     component: Post,
      //   },
      // ],
    },
    {
      path: '/solution/:id',
      name: 'solution-post-name',
      component: Post,
    },
    {
      path: '/news',
      name: 'news-name',
      component: News,
    },
  ]
})
