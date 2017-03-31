import storage from '../utils/storage'

class SmartBedService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  checkSmartBed(data) {
    // return this.$http.post('/customer/bunding',data)
  }

  save(data) {
    return this.$http.post('api/customer/bunding',storage.serialize(data))
  }
}
SmartBedService.$inject = ['$http', '$state']
export default SmartBedService
