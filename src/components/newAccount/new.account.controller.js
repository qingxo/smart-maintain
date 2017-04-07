import storage from '../../utils/storage'
import angular from 'angular'

class NewAccountController {
  constructor(NewAccountService, $stateParams, $rootScope, $location, ngDialog, $state) {
    this.stateParams = $stateParams
    this.NewAccountService = NewAccountService
    this.$rootScope = $rootScope
    this.$location = $location
    this.relationShip = '0'
    this.role = 3 // '默认为客户:0系统管理员 1平台管理员 2健康专员 3 客户
    this.sex = 'M' // M:男
    this.ngDialog = ngDialog
    this.$state = $state
  }

  $onInit() {
    $('span[href="' + this.$location.url() + '"]').parent('li').addClass('flag')
    this.isEdit = this.stateParams.isEdit
    if (this.isEdit) {
      this.userId = this.stateParams.userId
      this.initData()
    }
    this.getDefaultCommissioner()
  }

  initData() {
    this.NewAccountService.personInfo(this.userId).then((res) => {
      if (!res.data) return
      if (res.data.success) {
        let info = res.data.data
        this.realname = info.name
        this.mobile = info.mobile
        this.sex = info.sex
        this.userName = info.userName
        this.email = info.mail
        this.address = info.address
        this.remark = info.remark
        if (info.role) {
          this.role = info.role
        }
      }
    })
  }

  getDefaultCommissioner() {
    this.NewAccountService.getDefaultCommissioner().then((res) => {
      if (!res.data) return
      this.healthperson = res.data.data.name
    })
  }

  save() {
    var srcData = {}
    srcData.name = this.realname
    srcData = angular.toJson(srcData)
    var data = {
      'name': this.realname,
      'mobile': this.mobile,
      'sex': this.sex,
      'birdthday': this.birdthday,
      'height': this.height,
      'weight': this.weight,
      'address': this.address,
      'guardianName': this.controlName,
      'guardianMobile': this.controlMobile,
      'relationToCustomer': this.relationShip,
      'role': this.role
    }
    if (this.isEdit) {
      data.customerId = this.userId
      this.NewAccountService.editClient(data).then((res) => {
        if (res.data.success) {
          this.tips('编辑成功')
          this.$state.go('home.client')
        } else {
          this.tips(res.data.errMsg)
        }
      })
    } else {
      this.NewAccountService.saveClient(data).then((res) => {
        if (res.data.success) {
          this.tips('新增成功')
          this.$state.go('home.client')
        } else {
          this.tips(res.data.errMsg)
        }
      })
    }

  }

  tips(data) {
    var dialog2 = this.ngDialog.open({
      template: '<p style=" text-align:center" class="del-data-message">' + data + '</p>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    })
  }

}
NewAccountController.$inject = ['NewAccountService', '$stateParams', '$rootScope', '$location', 'ngDialog', '$state']
export default NewAccountController
