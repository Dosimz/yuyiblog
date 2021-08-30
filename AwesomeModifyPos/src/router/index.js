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
import Notfound from '@/components/common/Notfound'
import Bbsview from '@/components/page/Bulletin_board_system'
import VueRouter from 'vue-router'

Vue.use(Router)

const router = new VueRouter({
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
        // {
        //   path: 'user',
        //   // name: 'userinfo',
        //   component: Userhome,
        //   children:[
        //     {
        //       path: '/',
        //       name: 'userprofile',
        //       component: Myarticle
        //     },
        //     {
        //       path: 'articles',
        //       name: 'myarticle',
        //       component: Myarticle
        //     },
        //     {
        //       path: 'likes',
        //       name: 'mylike',
        //       component: Mylike
        //     },
        //     {
        //       path: 'favors',
        //       name: 'myfavors',
        //       component: Myfavors
        //     },
        //     {
        //       path: 'action',
        //       name: 'myaction',
        //       component: Myaction
        //     }
        //   ],
        // }
      ]
    },
    // {
    //   path: '/bbs',
    //   name: 'bbs',
    //   component: Bbsview
    // },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: Testview
    // },
    // {
    //   path: '/signup-resetpwd',
    //   name: 'signorreset',
    //   component: Signreset
    // },
    // {
    //   path: '/edit',
    //   name: 'edit',
    //   component: Editblog,
    //   // meta: {
    //   //   roles: ['']
    //   // }
    // },
    {
      path: '/404', 
      name: 'Notfound',
      component: Notfound, 
      // meta: {title:  '页面走丢了'}
    },      
    {
      path: '*', 
      // name: 'Notfound',
      // component: Notfound, 
      redirect: '/404'
      // meta: {title:  '页面走丢了'}
    },
  ]
})



// router.beforeEach((to, from, next) => {
//   if (to.name === 'edit') {
//     if (localStorage.getItem('token')) {
//       next();
//     } else {
//       next({ name: 'Notfound' });
//     } 
//   } else {
//     next();
//   };
  // nevermind --------------------
  // if (to.path === 'user') {
  //   if (localStorage.getItem('token')) {
  //     next();
  //   } else {
  //     next({ name: 'Notfound' });
  //   } 
  // } else {
  //   next();
  // } -----------------------------
// })
export default router
