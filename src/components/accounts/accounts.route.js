export default function routes($stateProvider) {
  $stateProvider
    .state('home.accounts', {
      url: '/accounts',
      template: '<accounts></accounts>',
      authenticate: true
    })
}
