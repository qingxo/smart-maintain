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

  tips(data) {
    var dialog2 = this.ngDialog.open({
      template: '<p style=" text-align:center" class="del-data-message">' + data + '</p>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    })
  }


}
HealthController.$inject = ['HealthService', '$stateParams', '$rootScope','$location','ngDialog']
export default HealthController
