import angular from 'angular'
import NewAccountComponent from './new.account.component'
import NewAccountRoutes from './new.account.route'
import services from '../../services'
import uiRouter from 'angular-ui-router'

import './new-account.scss'
const NewAccountModule = angular
  .module('new-account', [uiRouter, services])
  .config(NewAccountRoutes)
  .component('newAccount', NewAccountComponent)
  .name
export default NewAccountModule
