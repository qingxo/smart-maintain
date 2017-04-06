import storage from '../utils/storage'

class AccountsService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  delPerson(data) {
    return this.$http.post('api/account/delete/'+data)
  }

  accountsList(data) {
    return this.$http.post('api/account/listByPage'+data)
  }
}
AccountsService.$inject = ['$http','$state']
export default AccountsService
