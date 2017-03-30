export default function run($rootScope, $state, AccountService) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    if (toState.name === 'login' && AccountService.isLogin()) {
      $state.transitionTo('home.myaccount')
      event.preventDefault()
    }

    if (toState.authenticate && !AccountService.isLogin()) {
      $state.transitionTo('login')
      event.preventDefault()
    }
  })
}
