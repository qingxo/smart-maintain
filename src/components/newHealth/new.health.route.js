export default function routes($stateProvider) {
  $stateProvider
    .state('home.create', {
      url: '/create',
      template: '<new-health></new-health>',
      authenticate: true
    })
}
