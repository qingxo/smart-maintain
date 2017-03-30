import storage from '../../utils/storage'

class MyAccountController {
  constructor(MyAccountService, $stateParams, $rootScope,$location) {
    this.stateParams = $stateParams
    this.MyAccountService = MyAccountService
    this.$rootScope = $rootScope
    this.$location = $location
  }

  $onInit() {
    $('span[href="'+this.$location.url()+'"]').parent('li').addClass('flag')
  }

  save() {
    console.log(this.sex+","+this.sys+",glo:"+this.glo+",hel:"+this.hel);
  }

}
MyAccountController.$inject = ['MyAccountService', '$stateParams', '$rootScope','$location']
export default MyAccountController
