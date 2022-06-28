import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import('../views/especialidade/especialidade-list.vue')
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import('../views/convenio/convenio-list.vue')
  },
  {
    path: '/agendamento',
    name: 'agendamento',
    component: () => import('../views/agendamento/agendamento-list.vue')
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import('../views/historico/historico-list.vue')
  },
  {
    path: '/medico',
    name: 'medico',
    component: () => import('../views/medico/medico-list.vue')

  },
  {
    path:'/medico/formcadastro',
    name: 'medico-form-cadastro',
    component: () => import('../views/medico/medico-form-cadastro.vue')
  },
  {
    path:'/medico/formeditar',
    name: 'medico-form-editar',
    component: () => import('../views/medico/medico-form-editar.vue')
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: () => import('../views/paciente/paciente-list.vue')

  },
  {
    path:'/paciente/formcadastro',
    name: 'paciente-form-cadastro',
    component: () => import('../views/paciente/paciente-form-cadastro.vue')
  },
  {
    path:'/paciente/formeditar',
    name: 'paciente-form-editar',
    component: () => import('../views/paciente/paciente-form-editar.vue')
  },
  {
    path: '/secretaria',
    name: 'secretaria',
    component: () => import('../views/secretaria/secretaria-list.vue')

  },
  {
    path:'/secretaria/formcadastro',
    name: 'secretaria-form-cadastro',
    component: () => import('../views/secretaria/secretaria-form-cadastro.vue')
  },
  {
    path:'/secretaria/formeditar',
    name: 'secretaria-form-editar',
    component: () => import('../views/secretaria/secretaria-form-editar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
