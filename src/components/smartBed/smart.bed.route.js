export default function routes($stateProvider) {
  $stateProvider
    .state('home.smartBed', {
      url: '/smartbed?info',
      template: '<smart-bed></smart-bed>',
      authenticate: false
    })
}
