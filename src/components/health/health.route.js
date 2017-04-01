export default function routes($stateProvider) {
  $stateProvider
    .state('home.health', {
      url: '/health',
      template: '<health></health>',
      authenticate: true
    })
}
