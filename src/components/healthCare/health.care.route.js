export default function routes($stateProvider) {
  $stateProvider
    .state('home.healthcare', {
      url: '/healthcare?mobile&name&customerId',
      template: '<health-care></health-care>',
      authenticate: true
    })
}
