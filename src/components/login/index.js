import angular from 'angular'
import uiRouter from 'angular-ui-router'
import LoginComponent from './login.component'
import LoginRoutes from './login.routes'
import services from '../../services'

import './login.scss'

const LoginModule = angular
  .module('login', [uiRouter, services])
  .config(LoginRoutes)
  .component('login', LoginComponent)
  .name

export default LoginModule
