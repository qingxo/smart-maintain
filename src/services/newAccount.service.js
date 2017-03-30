import storage from '../utils/storage'

class NewAccountService{
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
  }

  saveClient(data) {
    console.log(data);
    console.log(storage.serialize(data));
    return this.$http.post('api/customer/add',storage.serialize(data))
  }

}
NewAccountService.$inject = ['$http','$state']
export default NewAccountService
