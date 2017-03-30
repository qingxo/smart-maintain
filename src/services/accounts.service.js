import storage from '../utils/storage'

class AccountsService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }
}
AccountsService.$inject = ['$http','$state']
export default AccountsService
