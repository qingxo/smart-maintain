import angular from 'angular'
import ClientComponent from './client.component'
import ClientRoutes from './client.route'
import services from '../../services'
import uiRouter from 'angular-ui-router'

import './client.scss'
const ClientModule = angular
  .module('client', [uiRouter, services])
  .config(ClientRoutes)
  .component('client', ClientComponent)
  .name
export default ClientModule
