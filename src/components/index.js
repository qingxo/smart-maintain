import angular from 'angular'
import LoginModule from './login'
import HomeModule from './home'
import MyAccountModule from './myAccount'
import AccountsModule from './accounts'
import ClientModule from './client'
import NewAccountModule from './newAccount'
import HealthModule from './health'
import SmartBedModule from './smartBed'
import NewHealth from './newHealth'
const Components = angular
  .module('app.components', [
    LoginModule,
    HomeModule,
    MyAccountModule,
    AccountsModule,
    ClientModule,
    NewAccountModule,
    HealthModule,
    SmartBedModule,
    NewHealth
  ])
  .name

export default Components
