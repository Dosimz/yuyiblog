import Vue from 'vue'
import Router from 'vue-router'
import Awesome from '@/components/page/Awesome'
import Midlayout from '@/components/page/Midlayout'
import Blogview from '@/components/page/Blogview'
import Editblog from '@/components/common/Editblog'
import Testview from '@/components/common/Testview'
import Signreset from '@/components/common/Signreset'
import Userhome from '@/components/userpage/Userhome'
import Myarticle from '@/components/userpage/Myarticle'
import Mylike from '@/components/userpage/Mylike'
import Myfavors from '@/components/userpage/Myfavors'
import Myaction from '@/components/userpage/Myaction'

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
          name: 'Home',
          component: Midlayout
        },
        {
          path: 'blog/:blogId',
          name: 'blog',
          component: Blogview
        },
        {
          path: 'user',
          // name: 'user',
          component: Userhome,
          children:[
            {
              path: '/',
              name: 'userprofile',
              component: Myarticle
            },
            {
              path: 'articles',
              name: 'myarticle',
              component: Myarticle
            },
            {
              path: 'likes',
              name: 'mylike',
              component: Mylike
            },
            {
              path: 'favors',
              name: 'myfavors',
              component: Myfavors
            },
            {
              path: 'action',
              name: 'myaction',
              component: Myaction
            }
          ]
        }
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
