import storage from '../../utils/storage'

class AccountsController {
  constructor(AccountsService, $stateParams, $rootScope,$location) {
    this.stateParams = $stateParams
    this.AccountsService = AccountsService
    this.$rootScope = $rootScope
    this.$location = $location
  }

  $onInit() {
    $('span[href="'+this.$location.url()+'"]').parent('li').addClass('flag')
  }

  save() {
  }

}
AccountsController.$inject = ['AccountsService', '$stateParams', '$rootScope','$location']
export default AccountsController
