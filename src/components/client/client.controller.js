import storage from '../../utils/storage'

class ClientController {
  constructor(ClientService, $stateParams, $rootScope,$location) {
    this.stateParams = $stateParams
    this.ClientService = ClientService
    this.$rootScope = $rootScope
    this.$location = $location
    this.pageNum = 1
    this.pageSize = 10
  }

  $onInit() {
    $('span[href="'+this.$location.url()+'"]').parent('li').addClass('flag')
    this.clientList('?pageSize='+this.pageSize+"&pageNum="+this.pageNum)
  }

  clientList(data) {
    this.ClientService.clientList(data).then((res)=>{
      if(!res.data) return
      console.log(res);
      if(res.data.success) {
        this.list = res.data.data.result
        console.log(this.list);
      }

    })
  }

  save() {
  }

}
ClientController.$inject = ['ClientService', '$stateParams', '$rootScope','$location']
export default ClientController
