export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
}
