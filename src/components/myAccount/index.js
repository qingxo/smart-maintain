import angular from 'angular'
import MyAccountComponent from './my.account.component'
import MyAccountRoutes from './my.account.route'
import services from '../../services'
import uiRouter from 'angular-ui-router'

import './my-account.scss'
const MyAccountModule = angular
  .module('my-account', [uiRouter, services])
  .config(MyAccountRoutes)
  .component('myAccount', MyAccountComponent)
  .name
export default MyAccountModule
