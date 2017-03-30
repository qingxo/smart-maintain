import angular from 'angular'
import SmartBedComponent from './smart.bed.component'
import SmartBedRoutes from './smart.bed.route'
import services from '../../services'
import uiRouter from 'angular-ui-router'

import './smart.bed.scss'
const SmartBedModule = angular
  .module('smart-bed', [uiRouter, services])
  .config(SmartBedRoutes)
  .component('smartBed', SmartBedComponent)
  .name
export default SmartBedModule
