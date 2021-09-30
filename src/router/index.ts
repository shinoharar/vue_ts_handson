import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Todo from '@/views/todo.vue'
import AddTodo from '@/views/AddTodo.vue'
import EditTodo from '@/views/EditTodo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Todos',
    component: Todo
  },
  {
    path: '/new',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/edit/:id',
    name: 'EditTodo',
    component: EditTodo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
