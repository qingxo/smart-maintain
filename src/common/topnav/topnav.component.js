import template from './topnav.html'
import controller from './topnav.controller'

const topnavComponent = {
  template,
  controller,
  bindings: {
    organization: '<',
    onGoHome: '&'
  }
}

export default topnavComponent
