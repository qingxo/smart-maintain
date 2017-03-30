import storage from '../../utils/storage'

class SmartBedController {
  constructor(SmartBedService, $stateParams, $rootScope,$location) {
    this.stateParams = $stateParams
    this.SmartBedService = SmartBedService
    this.$rootScope = $rootScope
    this.$location = $location
    this.pageNum = 1
    this.pageSize = 10
  }

  $onInit() {
  }

  checkSmartBed(num) {
    this.SmartBedService.checkSmartBed(num).then((res)=>{

    })
  }

}
SmartBedController.$inject = ['SmartBedService', '$stateParams', '$rootScope','$location']
export default SmartBedController
