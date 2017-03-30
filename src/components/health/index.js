import angular from 'angular'
import HealthComponent from './health.component'
import HealthRoutes from './health.route'
import services from '../../services'
import uiRouter from 'angular-ui-router'

import './health.scss'
const HealthModule = angular
  .module('health', [uiRouter, services])
  .config(HealthRoutes)
  .component('health', HealthComponent)
  .name
export default HealthModule
