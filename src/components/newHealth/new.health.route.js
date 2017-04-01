export default function routes($stateProvider) {
  $stateProvider
    .state('home.create', {
      url: '/create?userId',
      template: '<new-health></new-health>',
      authenticate: true
    })
}
