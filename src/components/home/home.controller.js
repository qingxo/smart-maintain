import storage from '../../utils/storage'
class HomeController {
  constructor(AccountService, $rootScope, $location, $state) {
    this.AccountService = AccountService
    this.toggleLogOutFlag = true
    this.$rootScope = $rootScope
    this.$location = $location
    this.$state = $state
  }

  $onInit() {
    this.userName = storage.get('state').name
  }

  logOut() {
    storage.remove('state')
    this.$state.go('login')
    // this.AccountService.clearSession('?token=' + token)
    //   .then((res) => {
    //     if (!res.data) return
    //     if (0 === res.data.code) {
    //       storage.remove('settingLocal1')
    //       storage.remove('settingLocal2')
    //       self.AccountService.logout()
    //     }
    //   })

  }

  handerColorInit(index) {
    $('ul.first-level>li').removeClass('flag')
    $('ul.first-level>li').eq(index - 1).addClass('flag')
    $('ul.second-level>li').removeClass('flag')

    this.closeUserInfo()
  }

  handerColorLevel2(index, e) {
    const el = e.target
    $('ul.second-level>li').removeClass('flag')
    // $(el).addClass('checkFlag')
    $(el).parent('li').addClass('flag')

    $('ul.first-level>li').removeClass('flag')
    this.closeUserInfo()
  }

  toggleMenu(e) {
    const el = e.target
    var foldFlag = $(el).siblings('ul').hasClass('menuShow')
    if (foldFlag) {
      $(el).siblings('ul').removeClass('menuShow')
    } else {
      $(el).siblings('ul').addClass('menuShow')
    }
    this.closeUserInfo()
  }

  closeUserInfo() {
    this.toggleLogOutFlag = true
  }
  toggleLogout() {
    this.toggleLogOutFlag = !this.toggleLogOutFlag
  }

}
HomeController.$inject = ['AccountService', '$rootScope', '$location', '$state']
export default HomeController
