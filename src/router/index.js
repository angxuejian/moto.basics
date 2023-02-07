import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Navbar from './navbar.json'

const routerComponents = {
  'css': () => import('@/views/examples/docs/css.md'),
  'css-animation': () => import('@/views/examples/docs/css-animation.md'),
  'use': () => import('@/views/examples/docs/lodash/use.md'),
  'isTypeOf': () => import('@/views/examples/docs/lodash/isTypeOf.md'),
  'toSpinalCase': () => import('@/views/examples/docs/lodash/toSpinalCase.md'),
  'getDepthValue': () => import('@/views/examples/docs/lodash/getDepthValue.md'),
  'getParams': () => import('@/views/examples/docs/lodash/getParams.md'),
  'drawRoundRect': () => import('@/views/examples/docs/lodash/drawRoundRect.md'),
  'ImageMode': () => import('@/views/examples/docs/lodash/imageMode.md'),
  'debounce': () => import('@/views/examples/docs/lodash/debounce.md'),
  'throttle': () => import('@/views/examples/docs/lodash/throttle.md'),
  'hexToRgb': () => import('@/views/examples/docs/lodash/hexToRgb.md'),
  'hsvToRgb': () => import('@/views/examples/docs/lodash/hsvToRgb.md'),
  'rgbToHex': () => import('@/views/examples/docs/lodash/rgbToHex.md'),
  'rgbToHsv': () => import('@/views/examples/docs/lodash/rgbToHsv.md'),
  'Calendar': () => import('@/views/examples/docs/lodash/calendar.md'),
  'readme': () => import('@/views/examples/docs/readme.md'),
}

const formatRouter = () => {
  const router = []
  const setData = (item) => {
    const url = item.path || item.name 

    return {
      path: url,
      name: item.name[0].toUpperCase() + item.name.substr(1),
      component: routerComponents[item.name],
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