import storage from '../../utils/storage'
import tools from '../../utils/tools'
class ClientController {
  constructor(ClientService, $stateParams, $rootScope,$location,ngDialog) {
    this.stateParams = $stateParams
    this.ClientService = ClientService
    this.$rootScope = $rootScope
    this.$location = $location
    this.pageSize = 10
    this.pageNumber = 1
    this.lastPage = ''
    this.morePage = false
    this.ngDialog = ngDialog
  }

  $onInit() {
    $('span[href="'+this.$location.url()+'"]').parent('li').addClass('flag')
    this.clientList('?pageSize='+this.pageSize+"&pageNum="+this.pageNumber)
  }

  clientList(data) {
    this.ClientService.clientList(data).then((res)=>{
      if(!res.data) return
      if(res.data.success) {
        this.list = res.data.data.result
        this.pagination = tools.ngSelPage(res)
        this.pageNumber = res.data.data.pageNumber
        this.lastPage = res.data.data.lastPage
        this.morePage = res.data.data.totalCount>this.pageSize? true:false

      }

    })
  }

  cancelSmartBed(customerId,equipId,item) {
    let self = this
    var dialog = this.ngDialog.openConfirm({
      template:'\
                <p>确认解除绑定?</p>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">取消</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">确认</button>\
                </div>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    }).then(function(data){
      self.unBinding(customerId,equipId,item)
    },function(data){
      console.log("no");
    })
  }

  tips(data) {
    var dialog2 = this.ngDialog.open({
      template: '<p style=" text-align:center" class="del-data-message">' + data + '</p>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    })
    setTimeout(() =>{
      dialog2.close()
    },1200)
  }

  unBinding(customerId,equipId,item) {
    var data ='?customerId='+customerId+'&equipmentNo='+equipId

    this.ClientService.unbind(data).then((res) =>{
      if(!res.data) return
      if(res.data.success) {
        this.tips(res.data.data)
        item.equipmentNo = ''
      }else{
        this.tips(res.data.errormsg)
      }
    })
  }


  goDetailPage(num) {
    this.clientList('?pageSize='+this.pageSize+"&pageNum="+num)
  }

  ngPageUp() {
    if(this.pageNumber!=1){
       --this.pageNumber
      this.clientList('?pageSize='+this.pageSize+"&pageNum="+this.pageNumber)
    }
  }

  ngPageDown() {
    if(!this.lastPage){
      ++this.pageNumber
      this.clientList('?pageSize='+this.pageSize+"&pageNum="+this.pageNumber)
    }
  }

  searchInfo() {
      this.pageNumber = 1
    if(this.queryInfo) {
      this.clientList('?pageSize='+this.pageSize+'&pageNum='+this.pageNumber+'&role=2'+"&query="+this.queryInfo)
    }else{
      this.clientList('?pageSize='+this.pageSize+'&pageNum='+this.pageNumber+'&role=2')
    }

  }
  search(e) {
    if(e.keyCode === 13) {
      this.searchInfo()
    }
  }

}
ClientController.$inject = ['ClientService', '$stateParams', '$rootScope','$location','ngDialog']
export default ClientController
