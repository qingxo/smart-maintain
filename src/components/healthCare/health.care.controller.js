import storage from '../../utils/storage'

class HealthCareController {
  constructor(HealthCareService, $stateParams, $rootScope, $location, ngDialog, $state) {
    this.stateParams = $stateParams
    this.HealthCareService = HealthCareService
    this.$rootScope = $rootScope
    this.$location = $location
    this.pageNum = 1
    this.pageSize = 20
    this.ngDialog = ngDialog
    this.$state = $state
  }

  $onInit() {
    let search = this.$location.search()
    this.name = search['name']
    this.mobile = search['mobile']
    this.customerId = search['customerId']
    this.initHealthCarePerson()
  }

  initHealthCarePerson() {
    this.HealthCareService.healthList('?pageSize=' + this.pageSize + '&pageNum=' + this.pageNum + '&role=2').then((res) => {
      if (!res.data) return
      if (res.data.success) {
        this.list = res.data.data.result
        this.healthCarePerson = res.data.data.result[0].userId
      }
    })
  }

  save() {
    var data = {
      'customerId': this.customerId,
      'commissionerUserId': this.healthCarePerson
    }
    this.HealthCareService.save(data).then((res) => {
      if (!res) return
      if (res.data.success) {
        this.tips('分配专员成功')
        this.$state.go('home.client')
      } else {
        this.tips('错误')
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
      template: '\
                <p>' + data + '</p>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">取消</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">强制绑定</button>\
                </div>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    }).then(function (data) {
      self.reBunding()
    }, function (data) {
      console.log('no')
    })
  }
}
HealthCareController.$inject = ['HealthCareService', '$stateParams', '$rootScope', '$location', 'ngDialog', '$state']
export default HealthCareController
