import storage from '../utils/storage'

class ClientService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  clientList(data) {
    return this.$http.post('api/customer/listByPage'+data)
  }
}
ClientService.$inject = ['$http', '$state']
export default ClientService
