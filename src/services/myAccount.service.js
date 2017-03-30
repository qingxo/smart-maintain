import storage from '../utils/storage'

class MyAccountService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }
}
MyAccountService.$inject = ['$http', '$state']
export default MyAccountService
