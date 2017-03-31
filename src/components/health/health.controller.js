import storage from '../../utils/storage'
import angular from 'angular'

class HealthController {
  constructor(HealthService, $stateParams, $rootScope,$location,ngDialog) {
    this.stateParams = $stateParams
    this.HealthService = HealthService
    this.$rootScope = $rootScope
    this.$location = $location
    this.ngDialog = ngDialog
    this.pageSize = 10
    this.pageNum = 1
    this.list = []
  }

  $onInit() {
    $('span[href="'+this.$location.url()+'"]').parent('li').addClass('flag')
    this.healthList('?pageSize='+this.pageSize+'&pageNum='+this.pageNum)
  }

  healthList(data) {
    this.HealthService.healthList(data).then((res) =>{
      if(!res.data) return
      if(res.data.success) {
        console.log(res.data.data.result);
        this.list = res.data.data.result
      }

    })
  }

  del(id) {
    this.HealthService.delPerson(id).then((res) =>{
        if(!res.data) return
        if(res.data.success) {
          this.tips("删除成功")
          this.delList(id)
        }
    })
  }

  //删除list中的数据
  delList(id) {
    for(var item in this.list) {
      if(this.list[item].userId === id) {
        this.list.splice(item,1);
      }
    }
  }

  //刷新list数据
  refreshList(id) {
    console.log("before:",this.list);
    for(var item in this.list) {
      if(this.list[item].userId === id) {
        console.log(this.list[item]);
        this.list[item].isDefaultCommissioner = '1';
      }else{
          this.list[item].isDefaultCommissioner = '0';
      }
    }
    console.log(this.list);
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
      template:'\
                <p>确认作为默认专员?</p>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">取消</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">确认</button>\
                </div>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    }).then(function(data){
      self.setDefault(id)
    },function(data){
      console.log("no");
    })
  }

  setDefault(id) {
    this.HealthService.defaultPerson(id).then((res) =>{
      if(!res.data) return
      if(res.data.success) {
        this.tips("设置成功")
        this.refreshList(id)
      }
    })
  }


}
HealthController.$inject = ['HealthService', '$stateParams', '$rootScope','$location','ngDialog']
export default HealthController
