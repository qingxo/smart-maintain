import storage from '../../utils/storage'

class LoginController {

  constructor(AccountService, $state) {
    this.LoginName = ''
    this.password = ''
    this.AccountService = AccountService
    this.$state = $state
    this.loginErr = false
    this.rememberPWD = false
  }

  $onInit() {
    var myView = document.getElementById('myView')
    myView.style.maxWidth = 'none'
    if(storage.get('ywLogin')){
      this.rememberPWD = true
      this.LoginName = storage.get('ywLogin').userName
      this.password = window.atob(storage.get('ywLogin').pwd)
    }
  }

  loginHandler() {
    if (!this.password && !this.LoginName) {
      this.loginErr = true
      this.errormsg = '请输入用户名和密码'
      return
    }

    if (!this.LoginName) {
      this.loginErr = true
      this.errormsg = '请输入用户名'
      return
    }
    if (!this.password) {
      this.loginErr = true
      this.errormsg = '请输入密码'
      return
    }

    if(this.rememberPWD){
        let data = {'userName':this.LoginName,'password':window.btoa(this.password)}
        storage.set('ywLogin',data)
    }else{
      storage.remove('ywLogin')
    }

    var loginParam = '?userName=' + this.LoginName + '&password=' + md5(this.password)

    this.AccountService.login(loginParam)
      .then((res) => {
        if (!res.data) return
        if(!res.data.success) {
          this.errormsg = res.data.errMsg
          return
        }

        const userData = res.data.data
        if (userData) {
          const sessionKey = userData.token
          const token = encodeURIComponent(window.btoa(sessionKey))
          let localData = {}

          for (let key in userData) {
            if (key !== 'sessionKey') {
              localData[key] = userData[key]
            }
          }

          localData = Object.assign({}, localData, {token: token, sessionKey: sessionKey})
          storage.set('state', localData)
          this.$state.go('home.myaccount',{'userId':res.data.data.userId})
          var myView = document.getElementById('myView')
          myView.style.maxWidth = '1600px'
        }
      })
  }
  // 键盘事件登录
  loginByEnter(e) {
    if (e.keyCode === 13) {
      this.loginHandler()
    }
  }
}

LoginController.$inject = ['AccountService', '$state']
export default LoginController
