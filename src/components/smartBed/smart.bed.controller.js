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
    let search = this.$location.search()
    this.name = search['name']
    this.mobile = search['mobile']
    this.customerId = search['customerId']
    console.log(this.mobile);
  }

  save() {
    if(!this.smartBed) {
      return
    }
    var data = {
      "customerId":this.customerId,
      "mobile":this.mobile,
      "name":this.name,
      "equipmentNo":this.smartBed
    }
    this.SmartBedService.save(data).then((res)=>{
      if(!res) return
      if(res.data.code == '200') {
        resolve("成功")
      }else{
        resolve("失败")
      }
    }).then((res) => {
      tips(res)
    })
  }

  tips(data) {
    var dialog2 = this.ngDialog.open({
      template: '<p style=" text-align:center" class="del-data-message">' + data + '</p>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    })
    // setTimeout(function () {
    //   this.dialog2.close()
    // }, 1500)
  }

}
SmartBedController.$inject = ['SmartBedService', '$stateParams', '$rootScope','$location']
export default SmartBedController
