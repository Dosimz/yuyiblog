import request from './request'
import qs from 'qs';

export default {
  login(name, password) {
    return request({
      url: '/user/login/',
      method: 'post',
      // header: 'Content-Type:application/x-www-form-urlencoded',
      // data: qs.stringify({'username': name, 'password': password})
      data : {
        username: name,
        password: password
      }
    })
  },
  getFavor(articleId) {
    return request({
      url: 'user/favors/' + articleId,
      method: 'get',
    })
  },
  delFavor(articleId){
    return request({
      url: 'user/favors/' + articleId,
      method: 'delete',
    })
  },
  addFavor(articleId){
    return request({
      url: 'user/favors/',
      method: 'post',
      data: qs.stringify({'articles': articleId}),
      
    })
  },
  sendMail(email) {
    return request({
      url: '/codes/',
      method: 'post',
      // header: 'Content-Type:application/x-www-form-urlencoded',
      data: qs.stringify({'email': email}),
      // data: {
      //   email: email,
      // }
    })
  },
  register(username, email, mailcode, password,) {
    return request({
      url: '/user/',
      method: 'post',
      // header: 'Content-Type:application/x-www-form-urlencoded',
      data: qs.stringify({
        'username': username, 
        'password': password,
        'email': email,
        'code': mailcode,
      })
      // data: {
      //   username: username,
      //   password: password,
      //   email: email,
      //   code: mailcode,
      // }
    })
  },
  // issue(title, body, tags) {
  //   // tags = tags.toString()
  //   return request({
  //     url: '/blogs/',
  //     method: 'post',
  //     data: JSON.stringify({
  //       'title': title,
  //       'body': body,
  //       'tags': tags,
  //     })
  //   })
  // },
  newtag(name){
    return request({
      url: '/tags/',
      method: 'post',
      data: qs.stringify({
        'name': name,
      })
    })
  },
  listreview(){
    return request({
      url: '/comments/',
      method: 'get',
      // params: {
      //   blogId: articleId
      // }
    })
  },
  newreviews(comment_value, articleId){
    return request({
      url: '/comments/',
      method: 'post',
      data: qs.stringify({
        'content': comment_value,
        'article': articleId 
      })
    })
  },
  retrieuserinfo(){
    return request({
      url: '/user/0/',
      method: 'get',
    })
  },
  updateuserinfo(up_name, up_birth, up_state, up_dsc){
    return request({
      url: 'user/0/',
      method: 'patch',
      data: qs.stringify({
        'name': up_name,
        'birth_date': up_birth,
        'user_state': up_state,
        'user_dsc': up_dsc,
      })
    })
  },
  forgetPassword(userName, mailCode, newPassword) {
    return request({
      url: '/user/forgetPassword',
      method: 'post',
      data: qs.stringify({'userName': userName, 'mailCode': mailCode, 'newPassword': newPassword})
    })
  },
  getUserMail() {
    return request({
      url: '/user/mail',
      method: 'get',
    })
  },
  updateReward(filePath) {
    return request({
      url: '/user/updateReward',
      method: 'put',
      data: qs.stringify({'imgPath': filePath})
    })
  },
  getUserReward() {
    return request({
      url: '/user/getReward',
      method: 'get',
    })
  },
  updatePassword(oldPassword, newPassword, mailCode) {
    return request({
      url: '/user/updatePassword',
      method: 'post',
      data: qs.stringify({'oldPassword': oldPassword, 'newPassword': newPassword, 'code': mailCode})
    })
  },
  updateMail(newMail, oldMailCode, newMailCode) {
    return request({
      url: '/user/updateMail',
      method: 'post',
      data: qs.stringify({'newMail': newMail, 'oldMailCode': oldMailCode, 'newMailCode': newMailCode})
    })
  },
  getUser(page, showCount) { //管理员分页查询用户数据
    return request({
      url: '/user/' + page + '/' + showCount,
      method: 'get',
    })
  },
  getUserByName(searchName, page, showCount) {   //管理层分页模糊查询用户名
    return request({
      url: '/user/search/' + page + '/' + showCount + '?userName=' + searchName,
      method: 'get',
    })
  },
  banUser(userId, userState) {
    return request({
      url: '/user/ban/' + userId + '/' + userState,
      method: 'get',
    })
  },
  logout(){
    return request({
      url: '/user/logout',
      method: 'get',
    })
  }


}
