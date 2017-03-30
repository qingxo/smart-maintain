import angular from 'angular'
import mocks from 'angular-mocks'

import * as app from './src/app'

let context = require.context('./src', true, /\.spec\.js/)
context.keys().forEach(context)
