import angular from 'angular';
import '../app-core/index';

import ImageController from './controllers/image.controller';
import AddImageController from './controllers/image.add.controller';

import ImageService from './services/image.service';

import jesseImage from './directive/jesse.directive';

angular
  .module('app.image', ['app.core'])
  .controller('ImageController', ImageController)
  .controller('AddImageController', AddImageController)
  .service('ImageService', ImageService)
  .directive('jesseImage',  jesseImage)

;