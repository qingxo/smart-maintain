import storage from '../../utils/storage'

class SmartBedController {
  constructor(SmartBedService, $stateParams, $rootScope,$location,ngDialog,$state) {
    this.stateParams = $stateParams
    this.SmartBedService = SmartBedService
    this.$rootScope = $rootScope
    this.$location = $location
    this.pageNum = 1
    this.pageSize = 10
    this.ngDialog = ngDialog
    this.$state = $state
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
        this.tips("绑定成功")
        this.$state.go('home.client')
      }else{
        this.tipsConfirm(res.data.errormsg)

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
  }

  tipsConfirm(data) {
    let self = this
    var dialog = this.ngDialog.openConfirm({
      template:'\
                <p>'+data+'</p>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">取消</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">强制绑定</button>\
                </div>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    }).then(function(data){
      self.reBunding()
    },function(data){
      console.log("no");
    })
  }

  reBunding() {
    if(!this.smartBed) {
      return
    }
    var data = {
      "customerId":this.customerId,
      "mobile":this.mobile,
      "name":this.name,
      "equipmentNo":this.smartBed
    }

    this.SmartBedService.reBunding(data).then((res)=>{
      if(!res) return
      if(res.data.code == '200') {
        this.tips("强制绑定成功")
        this.$state.go('home.client')
      }
    })
  }


}
SmartBedController.$inject = ['SmartBedService', '$stateParams', '$rootScope','$location','ngDialog','$state']
export default SmartBedController
