import storage from '../../utils/storage'
import tools from '../../utils/tools'
class ClientController {
  constructor(ClientService, $stateParams, $rootScope,$location) {
    this.stateParams = $stateParams
    this.ClientService = ClientService
    this.$rootScope = $rootScope
    this.$location = $location
    this.pageSize = 10
    this.pageNumber = 1
    this.lastPage = ''
    this.morePage = false
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

}
ClientController.$inject = ['ClientService', '$stateParams', '$rootScope','$location']
export default ClientController
