import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

// Export factory function
export default function createApp () {
  // 1. Create a router instance
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./components/HelloWorld.vue'),
        meta: {
          ssr: true
        }
      }
    ]
  })

  // 2. Create root component options
  const app = {
    router,
    // This is necessary, it is for vue-meta
    head: {},
    render: h => h(App)
  }

  // 3. return
  return app
}