import angular from 'angular';

import './app-core/index';
import './app-image/index';
import './app-layout/index';


angular
  .module('app', ['app.core', 'app.layout', 'app.image'])

;