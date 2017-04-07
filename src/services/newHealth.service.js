import storage from '../utils/storage'

class NewHealthService {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  saveHealth(data) {
    return this.$http.post('api/account/add', storage.serialize(data))
  }

  editHealth(data) {
    return this.$http.post('api/account/modify', storage.serialize(data))
  }

  personInfo(userId) {
    return this.$http.post('api/account/detail/' + userId)
  }

}
NewHealthService.$inject = ['$http', '$state']
export default NewHealthService
