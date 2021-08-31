import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // roles: localStorage.getItem('roles') == null ? '' : localStorage.getItem('roles'),
    // token: localStorage.getItem('token') == null ? '' : localStorage.getItem('token'),
    // user: localStorage.getItem('user') == null ? '' : JSON.parse(localStorage.getItem('user')),
    allList:[],
    ctom_value: '',
    user_article_info: '',
    page_loading: true,
  }, 
  actions: {
    handleConveyValue({commit, state}, ctom) {
      commit("handleConvey", ctom)
    }
  },
  mutations: {
    handleConvey(state, ctom) {
      state.ctom_value = ctom
    },
    // login(state, data) {
    //   // 变更状态
    //   this.state.token = data.token;
    //   localStorage.setItem('token', data.token);
    //   //存储用户名
    //   this.state.user = data.user;
    //   console.log(this.state.user)
    //   localStorage.setItem('user', JSON.stringify(data.user))

    //   this.state.roles = data.roles;
    //   localStorage.setItem('roles', data.roles)
    // },
    // logout(state) {
    //   localStorage.removeItem('token');
    //   this.state.token = '';
    //   localStorage.removeItem('user');
    //   this.state.user = '';
    //   localStorage.removeItem('roles');
    //   this.state.roles = '';
    // },
    // refresh(state, token) {  //刷新token
    //   this.state.token = token;
    //   localStorage.setItem('token', token);
    // },
    // reloading(state){
    //   this.state.page_loading = false
    // }
  }
})
