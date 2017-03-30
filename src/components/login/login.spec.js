import app from '../../app'

describe('component: login', () => {
  describe('login.controller', () => {
    let $componentController

    beforeEach(() => {
      angular.mock.module(app)
      angular.mock.inject((_$componentController_) => {
        $componentController = _$componentController_;
      })
    })

    it('LoginName should empty', () => {
      let ctrl = $componentController('login', null)
      expect(ctrl.LoginName).toBe('')
    })

    it('password should empty', () => {
      let ctrl = $componentController('login', null)
      expect(ctrl.password).toBe('')
    })
  })
})
