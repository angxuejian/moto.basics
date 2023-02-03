import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Navbar from './navbar.json'
const setting = require('@/setting')

const formatRouter = () => {
  const router = []
  const setData = (item) => {
    const url = item.path || item.name 
    return {
      path: `/${setting.path}/${url}`,
      name: item.name[0].toUpperCase() + item.name.substr(1),
      component: () => import('@/views/examples/docs/' + (url) + '.md'),
    }
  }
  Navbar.forEach(item => {
    if (item.children) {
      item.children.forEach(child => {
        !child.link && router.push(setData(child))
      })
    } else {
      !item.link && router.push(setData(item))
    }
  })
  return router
}

const children = formatRouter()
const routes = [
  {
    path: '/',
    redirect: children[0].path,
    component: () => import('@/layout'),
    children: children,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;