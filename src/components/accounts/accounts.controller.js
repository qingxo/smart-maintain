import storage from '../../utils/storage'
import tools from '../../utils/tools'
class AccountsController {
  constructor(AccountsService, $stateParams, $rootScope,$location,ngDialog) {
    this.stateParams = $stateParams
    this.AccountsService = AccountsService
    this.$rootScope = $rootScope
    this.$location = $location
    this.pageSize = 10
    this.pageNum = 1
    this.ngDialog = ngDialog
  }

  $onInit() {
    $('span[href="'+this.$location.url()+'"]').parent('li').addClass('flag')
    this.accountsList("?pageSize="+this.pageSize+"&pageNum="+this.pageNum)
  }

  accountsList(data) {
    this.AccountsService.accountsList(data).then((res) =>{
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

  del(id) {
    this.AccountsService.delPerson(id).then((res) =>{
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

  save() {
  }

}
AccountsController.$inject = ['AccountsService', '$stateParams', '$rootScope','$location','ngDialog']
export default AccountsController
