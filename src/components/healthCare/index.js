import angular from 'angular'
import HealthCareComponent from './health.care.component'
import HealthCareRoutes from './health.care.route'
import services from '../../services'
import uiRouter from 'angular-ui-router'

import './health.care.scss'
const HealthCareModule = angular
  .module('health-care', [uiRouter, services])
  .config(HealthCareRoutes)
  .component('healthCare', HealthCareComponent)
  .name
export default HealthCareModule
