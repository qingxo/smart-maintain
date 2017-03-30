import storage from '../utils/storage'

class SmartBedService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  checkSmartBed(data) {
    // return this.$http.post('/customer/bunding',data)
  }

  save() {
    return this.$http.post('/customer/bunding',data)
  }
}
SmartBedService.$inject = ['$http', '$state']
export default SmartBedService
