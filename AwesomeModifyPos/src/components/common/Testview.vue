<template>
    <div>
        <el-button type="text" @click="dialogFormVisible=true" class="header-nav-item">登录</el-button>
    <div v-show="sign_in">
        <el-dialog :visible.sync="dialogFormVisible" width="20%" :modal="false" id="disableMouseDiv">

            <div slot="title" class="dialog-title">
                <span>登录</span>
            </div>
            <el-form id="center-form" :model="form">
            <el-form-item id="center-item">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入手机号"></el-input>
                <!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码"></el-input> -->
            </el-form-item>
            <el-form-item id="center-item">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item id="center-item">
                <el-button id="center-login" type="primary" >登录</el-button>
                <span>没有账号？<span id="signin" @click="in_turn_up">注册</span></span> 
                <a id="pwdforget" href="">忘记密码</a>
            </el-form-item>
            </el-form>
            <div class="oauth-box">
                <div class="hint">第三方账号登录：</div>
                <div class="oauth">
                    <div class="oauth-bg">
                        <i class="el-icon-edit"></i>
                    </div>
                    <div class="oauth-bg">
                        <i class="el-icon-edit"></i>
                    </div>
                    <div class="oauth-bg">
                        <i class="el-icon-edit"></i>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <span class="hint-foot">本网站承诺不遵循任何隐私政策</span>
            <!-- <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
            </div>
        </el-dialog>
        </div>
    <div v-show="sign_up">
        <el-dialog :visible.sync="dialogFormVisible" width="20%" :modal="false" id="disableMouseDiv" >
            <div slot="title" class="dialog-title">
                <span>注册</span>
            </div>
            <el-form id="center-form" :model="form">
            <el-form-item id="center-item">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item id="center-item">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入手机号"></el-input>
                <!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码"></el-input> -->
            </el-form-item>
            <el-form-item id="center-item">
                <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item id="center-item">
                <el-button id="center-login" type="primary" >注册</el-button>
                <span id="signin" @click="in_turn_up">已有账号，去登录</span>
            </el-form-item>
            </el-form>

            <div class="oauth-box">
                <div class="hint">第三方账号登录：</div>
                <div class="oauth">
                    <div class="oauth-bg">
                        <i class="el-icon-edit"></i>
                    </div>
                    <div class="oauth-bg">
                        <i class="el-icon-edit"></i>
                    </div>
                    <div class="oauth-bg">
                        <i class="el-icon-edit"></i>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <span class="hint-foot">本网站承诺不遵循任何隐私政策</span>
            <!-- <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
            </div>
        </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        sign_in: true,
        sign_up: false,
      };
    },
    methods: {
      in_turn_up: function() {
        if (this.sign_in) {
          this.sign_in = false
          this.sign_up = true
        } else {
          this.sign_in = true
          this.sign_up = false
        }
    }
  }
}

</script>

<style>
.dialog-title {
  font-weight: 400;
  font-size: 1.4rem;
}

#center-form {
  padding: 0px 24px;
}
#center-login {
  width: 100%;
}

#signin {
  color: #409EFF;
  cursor: pointer;
}
#pwdforget {
  float: right;
  color: #409EFF;
}

.oauth-box {
    padding: 0px 24px;
    margin-top: -14px;
}
.oauth {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
}
.oauth-bg {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* span 标签字体颜色 */
.hint {
    color: #606266;
}
#f {
  padding: 0;
}
</style>