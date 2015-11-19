let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    .state('root.images', {
      url: '/images',
      controller: 'ImageController as vm',
      templateUrl: 'templates/app-image/images.tpl.html'
    })
    .state('root.addImages', {
      url: '/images/add',
      controller: 'AddImageController as vm',
      templateUrl: 'templates/app-image/images.add.tpl.html'
    });
  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;