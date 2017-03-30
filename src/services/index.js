import angular from 'angular'
import AccountService from './account.service'
import MyAccountService from './myAccount.service'
import AccountsService from './accounts.service'
import ClientService from './client.service'
import NewAccountService from './newAccount.service'
import HealthService from './health.service'
import SmartBedService from './smart.bed.service'
const Services = angular
  .module('app.services', [])
  .service('AccountService', AccountService)
  .service('MyAccountService', MyAccountService)
  .service('AccountsService', AccountsService)
  .service('ClientService', ClientService)
  .service('NewAccountService', NewAccountService)
  .service('HealthService', HealthService)
  .service('SmartBedService', SmartBedService)
  .name

export default Services
