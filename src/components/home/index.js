import angular from 'angular'
import uiRouter from 'angular-ui-router'
import HomeComponent from './home.component'
import HomeRoutes from './home.routes'
import services from '../../services'

import './home.scss'

const HomeModule = angular
  .module('home', [uiRouter, services])
  .config(HomeRoutes)
  .component('home', HomeComponent)
  .name

export default HomeModule
