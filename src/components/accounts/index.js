import angular from 'angular'
import AccountsComponent from './accounts.component'
import AccountsRoutes from './accounts.route'
import services from '../../services'
import uiRouter from 'angular-ui-router'

import './accounts.scss'
const AccountsModule = angular
  .module('accounts', [uiRouter, services])
  .config(AccountsRoutes)
  .component('accounts', AccountsComponent)
  .name
export default AccountsModule
