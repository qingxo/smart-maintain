import storage from '../utils/storage'

class HealthService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

}
HealthService.$inject = ['$http','$state']
export default HealthService
