export default function routes($stateProvider) {
  $stateProvider
    .state('home.client', {
      url: '/client',
      template: '<client></client>',
      authenticate: false
    })
}
