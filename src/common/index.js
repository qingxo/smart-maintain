import angular from 'angular'
import TopnavModule from './topnav'

const Common = angular
  .module('app.common', [
    TopnavModule
  ])
  .name

export default Common
