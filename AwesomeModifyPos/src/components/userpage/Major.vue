<template>
  <div class="major-area">
    <el-card v-loading="isLoading">
    <div class="user-info-block">
      <div class="avatar">
        <el-avatar :size="100"  :src="userinfo.avatar"></el-avatar>
      </div>
      <div class="info-box">
        <div class="top">
          <h1 class="username">{{userinfo.name}}</h1>
        </div>
        <div class="position">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gongzuo"></use>
          </svg>
          <span class="content">
            <span>{{ userinfo.user_state }}</span>
          </span>
        </div>
        <div class="intro">
          <div title="填写个人介绍" class="info-input">
            {{ userinfo.user_dsc }}
          </div>
        </div>
      </div>
      <div class="action-box">
        <div class="link-box">
          <a href="" title="微博">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibo"></use>
          </svg>
          </a>
          <a href="" title="Github">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Github"></use>
            </svg>
          </a>
          <a href="" title="微信">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
          </a>
        </div>
        <div class="stat-action-block">
          <el-button style="font-size: 1.2rem;" @click="dialogUserUpdateVisible=true">编辑个人资料</el-button>
          <el-dialog title="个人资料编辑" :visible.sync="dialogUserUpdateVisible" width="30%" >
            <div style="text-align: center;">
                <!-- :on-success="handleAvatarSuccess"
                :on-progress="handleAvatarProgress" -->
              <el-upload
                class="avatar_up-uploader"
                action="http://127.0.0.1:8000/imagetest/"
                ref="upload"
                :headers ="headers"
                :auto-upload="false"
                :show-file-list="false"
                :on-change="handleAvatarChange"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar_up">
                <i v-else class="el-icon-plus avatar_up-uploader-icon"></i>
              </el-upload>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <!-- <el-form-item label="活动区域" prop="region">
                  <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
              </el-form-item> -->
              <el-form-item label="生日" required>
                <!-- <el-col :span="11">
                      <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">&nbsp;</el-col>
                    <el-col :span="11">
                      <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                      </el-form-item>
                </el-col> -->
                <el-date-picker v-model="ruleForm.date" type="datetime" placeholder="选择日期时间" ></el-date-picker>
              </el-form-item>
              <el-form-item label="目前状态" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="在校学习"></el-radio>
                  <el-radio label="社会工作"></el-radio>
                  <el-radio label="啃老待业"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="个人描述" prop="dsc">
                <el-input type="textarea" v-model="ruleForm.dsc"></el-input>
              </el-form-item>
              <!-- <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
              </el-form-item> -->
              <!-- <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item> -->
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">更新信息</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
      </div>
    </div>
    </el-card>
    <div class="list-block">
      <Detaillist></Detaillist>
    </div>
  </div>
</template>
<script>
import Detaillist from '@/components/userpage/Detaillist'
import axios from 'axios'
import user from '@/api/user'

export default {
  name: 'Major',
  components: {
    Detaillist
  },
  data() {
      return {
        // url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        dialogUserUpdateVisible: false,
        dialogVisible: false,
        headers: {Authorization: 'JWT '+ this.$store.state.token},
        userinfo:'',
        imageUrl: '',
        ruleForm: {
          name: '',
          dsc:'',
          // region: '',
          // date1: '',
          // date2: '',
          date: '',
          delivery: false,
          // type: [],
          resource: '',
          // desc: ''
          isLoading: true,
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          dsc: [
            { required: true, message: '求求您说两句吧', trigger: 'blur' },
            { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择生日方便为您查询星座运势', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择目前的状态', trigger: 'change' }
          ],
          // desc: [
          //   { required: true, message: '请填写活动形式', trigger: 'blur' }
          // ]
        }
      };
  }, 
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
         function msToDate (msec) {
              let datetime = new Date(msec);
              let year = datetime.getFullYear();
              let month = datetime.getMonth();
              let date = datetime.getDate();
              let hour = datetime.getHours();
              let minute = datetime.getMinutes();
              let second = datetime.getSeconds();
              let result1 = year + 
                          '-' + 
                          ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                          '-' + 
                          ((date + 1) < 10 ? '0' + date : date) + 
                          ' ' + 
                          ((hour + 1) < 10 ? '0' + hour : hour) +
                          ':' + 
                          ((minute + 1) < 10 ? '0' + minute : minute) + 
                          ':' + 
                          ((second + 1) < 10 ? '0' + second : second);
              // let result = {
              //     hasTime: result1,
              // };
              return result1;
        }
          var update_birth = msToDate(this.ruleForm.date)
          console.log(update_birth)
          this.$refs.upload.submit();
          user.updateuserinfo(this.ruleForm.name, update_birth, this.ruleForm.resource, this.ruleForm.dsc).then(res => {
            // console.log(res)
          this.$message({
            message: '更新个人信息成功',
            type: 'success'
          });
          // 组件刷新
          location.reload()
          });
          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarChange(file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        // console.log(this.imageUrl)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
        // console.log(this.imageUrl)  
      }
  },
  mounted(){
    
    user.retrieuserinfo().then(res => {
      // console.log(res.birth_date.toString().slice(11,19))
      this.userinfo = res;
      this.ruleForm.name = res.name
      // this.ruleForm.date1 = res.birth_date
      this.ruleForm.dsc = res.user_dsc
      this.ruleForm.resource = res.user_state
      this.imageUrl = res.avatar
      this.ruleForm.date = new Date(res.birth_date)
      this.isLoading = false
    });
  },
}


</script>

<style>
.user-info-block {
  display: flex;
  
}

.avatar {
  flex: 0 0 auto;
  margin-right: 2rem;
  /* width: 6.4rem;
  height: 6.4rem; */
  /* border-radius: 50%; */
  display: inline-block;
  position: relative;
  /* background-position: 50%; */
  /* background-repeat: no-repeat;
  background-size: cover; */
}

.info-box {
    flex: 1 1 auto;
    margin-right: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.info-box .top .username {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
}
.info-box .position {
  margin-top: 1rem;
  display: flex;
  font-size: 1rem;
  line-height: 1.5;
  color: #72777b;
  overflow: hidden;
}

 .icon {
  width: 1em; 
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 1.2rem;
  flex: 0 0 auto;
  height: 1.2em;
}
.intro {
  margin-top: .4rem;
  display: flex;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #72777b;
  overflow: hidden;
}

.action-box {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.link-box {
  margin-bottom: auto;
}
.stat-action-block {
  /* display: none;
  margin-top: 1.4rem;
  margin-bottom: 0;
  align-items: flex-end;
  justify-content: space-between; */

}



.list-block {
  margin-top: 1rem;
}



  .avatar_up-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar_up-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar_up-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar_up {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>