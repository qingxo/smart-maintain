import storage from '../../utils/storage'
import angular from 'angular'
import moment from 'moment'
class NewHealthController {
  constructor(NewHealthService, $stateParams, $rootScope, $location, ngDialog, $state, $timeout) {
    this.stateParams = $stateParams
    this.NewHealthService = NewHealthService
    this.$rootScope = $rootScope
    this.$location = $location
    this.role = '2' // '默认为客户:0系统管理员 1平台管理员 2健康专员 3 客户
    this.sex = 'F' // M:男,F:女
    this.ngDialog = ngDialog
    this.$state = $state
    this.$timeout = $timeout
    this.showCalendar = false
    this.dateTimePickerConfig = {
      minView: 'day'
    }
  }

  $onInit() {
    $('span[href="' + this.$location.url() + '"]').parent('li').addClass('flag')
    moment.locale('zh-cn')
    this.userId = this.$location.search().userId
    if (this.userId) {
      this.editModule()
    }

    this.isHealth = Boolean(this.stateParams.isHealth) | false
    this.userId = this.stateParams.userId
  }

  editModule() {
    this.NewHealthService.personInfo(this.userId).then((res) => {
      if (!res.data) return
      if (res.data.success) {
        let info = res.data.data
        this.realname = info.name
        this.mobile = info.mobile
        this.sex = info.sex
        this.userName = info.userName
        this.email = info.mail
        this.address = info.address
        this.remark = info.remark
        this.pwd = info.secret
        this.birdthday = info.birdthday
        if (info.role) {
          this.role = info.role
        }
      }
    })
  }

  save() {
    var srcData = {}
    srcData.name = this.realname
    srcData = angular.toJson(srcData)

    if (!this.realname) {
      this.tips('姓名必填')
      return
    }

    if (!this.mobile) {
      this.tips('手机号必填')
      return
    }

    if (!this.userName) {
      this.tips('用户名必填')
      return
    }
    if (!this.pwd) {
      this.tips('密码必填')
      return
    }

    var data = {
      'name': this.realname,
      'mobile': this.mobile,
      'userName': this.userName,
      'secret': md5(this.pwd),
      'sex': this.sex,
      'birdthday': this.birdthday,
      'mail': this.email,
      'address': this.address,
      'role': this.role,
      'remark': this.remark
    }

    if (this.userId) {
      data.userId = this.userId
      delete data.secret
      this.NewHealthService.editHealth(data).then((res) => {
        if (res.data.success) {
          this.tips('编辑成功')
          if (this.isHealth) {
            this.$timeout(this.$state.go('home.health'), 800)
          } else {
            this.$timeout(this.$state.go('home.accounts'), 800)
          }

        } else {
          this.tips(res.data.errMsg)
        }
      })
    } else {
      this.NewHealthService.saveHealth(data).then((res) => {
        if (res.data.success) {
          this.tips('新增成功')
          if (this.isHealth) {
            this.$timeout(this.$state.go('home.health'), 800)
          } else {
            this.$timeout(this.$state.go('home.accounts'), 800)
          }

        } else {
          this.tips(res.data.errMsg)
        }
      })
    }

  }

  tips(data) {
    var dialog = this.ngDialog.open({
      template: '<p style=" text-align:center" class="del-data-message">' + data + '</p>',
      plain: true,
      closeByDocument: false,
      closeByEscape: true
    })
    setTimeout(() =>{
      dialog.close()
    }, 1500)
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
NewHealthController.$inject = ['NewHealthService', '$stateParams', '$rootScope', '$location', 'ngDialog', '$state', '$timeout']
export default NewHealthController
