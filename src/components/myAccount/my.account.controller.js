import storage from '../../utils/storage'
import moment from 'moment'
class MyAccountController {
  constructor(MyAccountService, $stateParams, $rootScope, $location, ngDialog) {
    this.stateParams = $stateParams
    this.MyAccountService = MyAccountService
    this.$rootScope = $rootScope
    this.$location = $location
    this.ngDialog = ngDialog
    this.showCalendar = false
    this.dateTimePickerConfig = {
      minView: 'day'
    }
  }

  $onInit() {
    $('span[href="' + this.$location.url() + '"]').parent('li').addClass('flag')
    moment.locale('zh-cn')
    this.loadDetail()
  }

  loadDetail() {
    var state = storage.get('state')
    this.realname = state.name
    this.mobile = state.mobile
    this.remark = state.remark
    this.username = state.userName
    this.userId = state.userId
    this.address = state.address
    this.email = state.mail
    this.sex = state.sex
    this.birdthday = state.birdthday
    this.role = state.role

  }

  save() {
    var data = {
      'name': this.realname,
      'mobile': this.mobile,
      'sex': this.sex,
      'birdthday': this.birdthday,
      'address': this.address,
      'mail': this.email,
      'remark': this.remark,
      'role': this.role,
      'userName': this.username,
      'userId': this.userId

    }

    this.MyAccountService.save(data).then((res) => {
      if (!res.data) return
      if (res.data.success) {
        storage.set('state', data)
        this.tips('修改成功！')
      } else {
        this.tips(res.data.errMsg)
      }
    })
  }

  tips(data) {
    var dialog2 = this.ngDialog.open({
      template: '<p style=" text-align:center" class="del-data-message">' + data + '</p>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    })
  }

  /**
   * 打开日期选择器
   *
   * @memberOf BedSleepController
   * @public
   */
  openCalendar() {
    this.showCalendar = true
    // this.$document.on('click', this.onDocumentClick.bind(this))
  }


  /**
   * 选择日期
   *
   * @param {Date} date
   *
   * @memberOf BedSleepController
   * @public
   */
  onSetTime(date) {
    this.showCalendar = false

    this.birdthday = moment(date).format('YYYY-MM-DD')
  }

}
MyAccountController.$inject = ['MyAccountService', '$stateParams', '$rootScope', '$location', 'ngDialog']
export default MyAccountController
