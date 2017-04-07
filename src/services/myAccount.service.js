import storage from '../utils/storage'

class MyAccountService {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  getCurrentUser(userId) {
    return this.$http.post('api/detail/' + userId)
  }

  save(data) {
    return this.$http.post('api/account/modify', storage.serialize(data))
  }
}
MyAccountService.$inject = ['$http', '$state']
export default MyAccountService
