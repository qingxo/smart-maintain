import storage from '../utils/storage'

class NewAccountService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  saveClient(data) {
    return this.$http.post('api/customer/add',storage.serialize(data))
  }

  getDefaultCommissioner() {
    return this.$http.post('api/account/getDefaultCommissioner')
  }
}
NewAccountService.$inject = ['$http','$state']
export default NewAccountService
