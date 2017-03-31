import storage from '../utils/storage'

class HealthService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  healthList(data) {
    return this.$http.post('api/account/listByPage'+data)
  }

  delPerson(data) {
    return this.$http.post('api/account/delete/'+data)
  }

}
HealthService.$inject = ['$http','$state']
export default HealthService
