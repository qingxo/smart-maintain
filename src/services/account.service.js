import storage from '../utils/storage'

class AccountService {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  login(data) {
    return this.$http.post('api/web/login' + data)
  }

  isLogin() {
    const state = storage.get('state')
    return !!state
  }

  logout() {
    storage.remove('state')
    this.$state.go('login')
  }

  clearSession(data) {
    return this.$http.get('webplatform/userInfo/loginOut.action' + data)
  }

  // 获得登录账号的权限菜单
  getEnableMenuPermissionsList(moduleType) {
    return this.$http.get('api/smarthome/EnableMenuPermissionsList/' + moduleType)
  }

}

AccountService.$inject = ['$http', '$state']
export default AccountService
