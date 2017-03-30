import angular from 'angular'
import topnavComponent from './topnav.component'

import './topnav.scss'

const topnavModule = angular
  .module('topnav', [])
  .component('topnav', topnavComponent)
  .name

export default topnavModule
