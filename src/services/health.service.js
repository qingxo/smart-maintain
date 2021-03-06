import storage from '../utils/storage'

class HealthService {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  healthList(data) {
    return this.$http.post('api/account/listByPage' + data)
  }

  delPerson(data) {
    return this.$http.post('api/account/delete/' + data)
  }

  defaultPerson(id) {
    return this.$http.post('api/account/setDefaultCommissioner/' + id)
  }

  getDefaultCommissioner() {
    return this.$http.post('api/account/getDefaultCommissioner')
  }

}
HealthService.$inject = ['$http', '$state']
export default HealthService
