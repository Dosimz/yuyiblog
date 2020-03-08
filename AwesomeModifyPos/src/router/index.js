import Vue from 'vue'
import Router from 'vue-router'
import Awesome from '@/components/page/Awesome'
import Midlayout from '@/components/page/Midlayout'
import Blogview from '@/components/page/Blogview'
import Editblog from '@/components/common/Editblog'
import Testview from '@/components/common/Testview'
import Signreset from '@/components/common/Signreset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Awesome',
      component: Awesome,
      children: [
        {
          path: '/',
          component: Midlayout
        },
        {
          path: 'blog/:blogId',
          name: 'blog',
          component: Blogview
        },
        // {
        //   path: '/',
        //   component: Awesome
        // },
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: Testview
    },
    {
      path: '/signup-resetpwd',
      name: 'signorreset',
      component: Signreset
    },
    {
      path: '/edit',
      name: 'edit',
      component: Editblog
    },
  ]
})
