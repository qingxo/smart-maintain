import angular from 'angular'
import NewHealthComponent from './new.health.component'
import NewHealthRoutes from './new.health.route'
import services from '../../services'
import uiRouter from 'angular-ui-router'

import './new-health.scss'
const NewAccountModule = angular
  .module('new-health', [uiRouter, services])
  .config(NewHealthRoutes)
  .component('newHealth', NewHealthComponent)
  .name
export default NewAccountModule
