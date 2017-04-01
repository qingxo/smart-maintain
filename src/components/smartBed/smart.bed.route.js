export default function routes($stateProvider) {
  $stateProvider
    .state('home.smartBed', {
      url: '/smartbed?mobile&name&customerId',
      template: '<smart-bed></smart-bed>',
      authenticate: true
    })
}
