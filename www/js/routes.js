angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.store', {
    url: '/store',
    views: {
      'tab1': {
        templateUrl: 'templates/store.html',
        controller: 'storeCtrl'
      }
    }
  })

  .state('tabsController.garden', {
    url: '/garden',
    views: {
      'tab2': {
        templateUrl: 'templates/garden.html',
        controller: 'gardenCtrl'
      }
    }
  })

  .state('tabsController.status', {
    url: '/status',
    views: {
      'tab3': {
        templateUrl: 'templates/status.html',
        controller: 'statusCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('saveLoad', {
    url: '/save',
    templateUrl: 'templates/saveLoad.html',
    controller: 'saveLoadCtrl'
  })

  .state('options', {
    url: '/options',
    templateUrl: 'templates/options.html',
    controller: 'optionsCtrl'
  })

$urlRouterProvider.otherwise('/page1/status')

  

});