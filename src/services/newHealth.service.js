import storage from '../utils/storage'

class NewHealthService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  saveHealth(data) {
    return this.$http.post('api/account/add',storage.serialize(data))
  }

}
NewHealthService.$inject = ['$http','$state']
export default NewHealthService
