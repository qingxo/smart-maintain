import storage from '../utils/storage'

class HealthCareService {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  healthList(data) {
    return this.$http.post('api/account/listByPage' + data)
  }

  save(data) {
    return this.$http.post('api/customer/fixSpecialist/' + data.customerId + '/' + data.commissionerUserId)
  }

}
HealthCareService.$inject = ['$http', '$state']
export default HealthCareService
