import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import store from '@/store/index'

import Index from '@/components/Main/Index'
import Login from '@/components/Login/Login'
import NotFound from '@/components/NotFound'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/channels/:channel(.*)',
      component: Index
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})

router.beforeEach(async (to, from, next) => {
  // if (!store.me) {
  //   next('/login')
  // }
  let isLogin = false
  if (!store.state.loaded) {
    await store.dispatch('whoAmI')
    .then(() => { isLogin = true })
  }

  if (to.path === '/login') {
    if (!isLogin) {
      store.commit('loadEnd')
      next(true)
      return
    } else {
      next('/channels/random')
      return
    }
  }
  if (!store.state.loaded) {
    try {
      await Promise.all([
        store.dispatch('updateChannels'),
        store.dispatch('updateMembers'),
        store.dispatch('updateClipedMessages')
      ])
      store.commit('loadEnd')
    } catch (e) {
      store.commit('loadEnd')
      next('/login')
      return
    }
  }
  if (!to.params.channel) {
    next(true)
    return
  }
  const nextChannel = store.getters.getChannelByName(to.params.channel)
  if (!nextChannel) {
    next(false)
  } else {
    store.commit('changeChannel', nextChannel)
    next(true)
  }
})

export default router
