import template from './home.html'
import controller from './home.controller'

const HomeComponent = {
  template,
  controller,
  bindings:{
    alarmCall:'='
  }
}

export default HomeComponent
