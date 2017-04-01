import storage from '../../utils/storage'
import angular from 'angular'

class NewHealthController {
  constructor(NewHealthService, $stateParams, $rootScope,$location,ngDialog,$state,$timeout) {
    this.stateParams = $stateParams
    this.NewHealthService = NewHealthService
    this.$rootScope = $rootScope
    this.$location = $location
    this.role = 2 //'默认为客户:0系统管理员 1平台管理员 2健康专员 3 客户
    this.sex = 'F' // M:男,F:女
    this.ngDialog = ngDialog
    this.$state = $state
    this.$timeout = $timeout
  }

  $onInit() {
    $('span[href="'+this.$location.url()+'"]').parent('li').addClass('flag')
  }

  save() {
    console.log(this.relationShip);
    var srcData = {}
    srcData.name = this.realname
    srcData = angular.toJson(srcData)
    var data = {
      "name":this.realname,
      "mobile":this.mobile,
      "userName":this.userName,
      "secret":md5(this.pwd),
      "sex":this.sex,
      "birdthday":this.birdthday,
      "mail":this.email,
      "address":this.address,
      "role":this.role
    }
    this.NewHealthService.saveHealth(data).then((res) =>{
      console.log(res);
        if(res.data.success) {
          this.tips("新增成功")
          this.$timeout(this.$state.go('home.health'),800)

        }else{
          this.tips(res.data.errMsg)
        }
    })
  }

  tips(data) {
    var dialog2 = this.ngDialog.open({
      template: '<p style=" text-align:center" class="del-data-message">' + data + '</p>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    })
    setTimeout(function () {
      this.dialog2.close()
    }, 1500)
  }

}
NewHealthController.$inject = ['NewHealthService', '$stateParams', '$rootScope','$location','ngDialog','$state','$timeout']
export default NewHealthController
