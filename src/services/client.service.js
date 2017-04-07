import storage from '../utils/storage'

class ClientService {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  clientList(data) {
    return this.$http.post('api/customer/listByPage' + data)
  }

  unbind(data) {
    return this.$http.post('api/customer/unbunding' + data)
  }
}
ClientService.$inject = ['$http', '$state']
export default ClientService
