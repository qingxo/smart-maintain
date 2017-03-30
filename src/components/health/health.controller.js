import storage from '../../utils/storage'
import angular from 'angular'

class HealthController {
  constructor(HealthService, $stateParams, $rootScope,$location) {
    this.stateParams = $stateParams
    this.HealthService = HealthService
    this.$rootScope = $rootScope
    this.$location = $location
    this.relationShip = '0'
    this.role = 3 //'默认为客户:0系统管理员 1平台管理员 2健康专员 3 客户
    this.sex = 'M' // M:男
  }

  $onInit() {
    $('span[href="'+this.$location.url()+'"]').parent('li').addClass('flag')
  }

  save() {
    console.log(this.relationShip);
    var data = {
      "name":this.realname,
      "mobile":this.mobile,
      "sex":this.sex,
      "birdthday":this.birdthday,
      "height":this.height,
      "weight":this.weight,
      "address":this.address,
      "guardianName":this.controlName,
      "guardianMobile":this.controlMobile,
      "relationToCustomer":this.relationShip,
      "role":this.role
    }
    this.NewAccountService.saveClient(data).then((res) =>{

    })
  }

}
HealthController.$inject = ['HealthService', '$stateParams', '$rootScope','$location']
export default HealthController
