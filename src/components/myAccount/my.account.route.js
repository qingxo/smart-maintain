export default function routes($stateProvider) {
  $stateProvider
    .state('home.myaccount', {
      url: '/myaccount',
      template: '<my-account></my-account>',
      authenticate: true
    })
}
