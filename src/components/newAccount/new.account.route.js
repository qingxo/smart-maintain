export default function routes($stateProvider) {
  $stateProvider
    .state('home.newaccount', {
      url: '/newaccount',
      template: '<new-account></new-account>',
      authenticate: false
    })
}
