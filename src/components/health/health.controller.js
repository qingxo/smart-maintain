import storage from '../../utils/storage'
import angular from 'angular'
import tools from '../../utils/tools'
class HealthController {
  constructor(HealthService, $stateParams, $rootScope, $location, ngDialog) {
    this.stateParams = $stateParams
    this.HealthService = HealthService
    this.$rootScope = $rootScope
    this.$location = $location
    this.ngDialog = ngDialog
    this.pageSize = 10
    this.pageNumber = 1
    this.lastPage = ''
    this.list = []
    this.defalutPerson = {}
    this.morePage = false
  }

  $onInit() {
    $('span[href="' + this.$location.url() + '"]').parent('li').addClass('flag')
    this.healthList('?pageSize=' + this.pageSize + '&pageNum=' + this.pageNumber + '&role=2')
    this.geDefaultPerson()
  }

  healthList(data) {
    this.HealthService.healthList(data).then((res) => {
      if (!res.data) return
      if (res.data.success) {
        this.list = res.data.data.result
        this.pagination = tools.ngSelPage(res)
        this.pageNumber = res.data.data.pageNumber
        this.lastPage = res.data.data.lastPage
        this.morePage = res.data.data.totalCount > this.pageSize ? true : false
      }

    })
  }

  del(id) {
    this.HealthService.delPerson(id).then((res) => {
      if (!res.data) return
      if (res.data.success) {
        this.tips('删除成功')
        this.delList(id)
      }
    })
  }

  // 删除list中的数据
  delList(id) {
    for (var item in this.list) {
      if (this.list[item].userId === id) {
        this.list.splice(item, 1)
      }
    }
  }

  geDefaultPerson() {
    this.HealthService.getDefaultCommissioner().then((res) => {
      this.defalutPerson = res.data.data
    })
  }

  // 刷新list数据
  refreshList(id) {
    for (var item in this.list) {
      if (this.list[item].userId === id) {
        this.list[item].isDefaultCommissioner = '1'
        this.defalutPerson = this.list[item]
      } else {
        this.list[item].isDefaultCommissioner = '0'
      }
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

  defaultTips(id) {
    let self = this
    var dialog = this.ngDialog.openConfirm({
      template: '\
                <p>确认作为默认专员?</p>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">取消</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">确认</button>\
                </div>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    }).then(function (data) {
      self.setDefault(id)
    }, function (data) {
      console.log('no')
    })
  }

  setDefault(id) {
    this.HealthService.defaultPerson(id).then((res) => {
      if (!res.data) return
      if (res.data.success) {
        this.tips('设置成功')
        this.refreshList(id)
      }
    })
  }

  goDetailPage(num) {
    this.healthList('?pageSize=' + this.pageSize + '&pageNum=' + num + '&role=2')
  }

  ngPageUp() {
    if (this.pageNumber != 1) {
      --this.pageNumber
      this.healthList('?pageSize=' + this.pageSize + '&pageNum=' + this.pageNumber + '&role=2')
    }
  }

  ngPageDown() {
    if (!this.lastPage) {
      ++this.pageNumber
      this.healthList('?pageSize=' + this.pageSize + '&pageNum=' + this.pageNumber + '&role=2')
    }
  }

  searchInfo() {
    this.pageNumber = 1
    if (this.queryInfo) {
      this.healthList('?pageSize=' + this.pageSize + '&pageNum=' + this.pageNumber + '&role=2' + '&query=' + this.queryInfo)
    } else {
      this.healthList('?pageSize=' + this.pageSize + '&pageNum=' + this.pageNumber + '&role=2')
    }

  }
  search(e) {
    if (e.keyCode === 13) {
      this.searchInfo()
    }
  }

}
HealthController.$inject = ['HealthService', '$stateParams', '$rootScope', '$location', 'ngDialog']
export default HealthController
