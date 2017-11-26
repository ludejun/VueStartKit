import Vue from 'vue'
import Router from 'vue-router'
import { HelloWorld, Example } from '@/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      children: [
        {
          path: 'example',
          component: Example
        }
      ]
    }
  ]
})
