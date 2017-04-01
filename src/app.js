import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngSanitize from 'angular-sanitize'
import ngDialog from 'ng-dialog'
import datetimepicker from 'angular-bootstrap-datetimepicker'
import AppComponent from './app.component'
import Common from './common'
import Components from './components'
import config from './config'
import run from './run'
import './app.scss'

const AppModule = angular
  .module('app', [
    uiRouter,
    ngSanitize,
    ngDialog,
    datetimepicker,
    Common,
    Components
  ])
  .component('app', AppComponent)
  .config(config)
  .run(run)
  .name

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'])
})

export default AppModule
