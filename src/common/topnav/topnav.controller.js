import storage from '../../utils/storage'
class TopNavController {
  constructor(AccountService, $document, $timeout, $state) {
    this.$document = $document
    this.$timeout = $timeout
    this.$state = $state
    this.AccountService = AccountService
    this.userLongout = false
    this.accName = storage.get('state')['accName']
    this.privilegesModule = storage.get('state')['privilegesModule']
    let re1 = /001/g
    let re2 = /002/g
    let re3 = /003/g
    this.settingBool = re1.test(this.privilegesModule) || re2.test(this.privilegesModule)
    this.warnBool = re3.test(this.privilegesModule)
  }
  toggleUserLogOut() {
    this.userLongout = true
    this.$document.on('click', this.onDocumentClick.bind(this))

  }
  onDocumentClick(e) {
    if ($('.user-out').size > 0) {
      if ($('.user-out')[0].contains(e.target) || $(e.target).hasClass('user')) return
      this.$timeout(() => {
        this.userLongout = false
      })
    }
  }
  logOut() {
    this.AccountService.clearSession()
      .then((res) => {
        if (!res.data) return
        if (res.data.success) {
          storage.remove('settingLocal1')
          storage.remove('settingLocal2')
          this.AccountService.logout()
        }
      })
  }
  settingLocal(moduleType) {
    this.AccountService.getEnableMenuPermissionsList(moduleType)
      .then((res) => {
        console.log(res.data.data)
        storage.set('settingLocal' + moduleType, res.data.data)
        if (moduleType === 1) {
          this.$state.go('setting.organization')
        } else if (moduleType === 2) {
          this.$state.go('warn.record')
        }
      })
  }
}
TopNavController.$inject = ['AccountService', '$document', '$timeout', '$state']
export default TopNavController
