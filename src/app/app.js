(function () {

    angular.module('theBlueCabrio', [
        'ngRoute',
        'ngSanitize'
      ]);

    /**
   * Main application routing and configuration
   *
   * @param routeProvider
   *
   * @ngInject
   */
    var theBlueCabrioConfig = function ($routeProvider) {

      $routeProvider.when('/', {
        templateUrl: 'views/index.html',
        controller: 'indexController'
      })
      .otherwise({
        templateUrl: 'views/404.html'
      });

    };

    /**
   * Main application controller
   *
   * @ngInject
   *
   */
    var theBlueCabrioController = function () {

    };

    /**
    * Sets up application configuration
    */
    angular.module('theBlueCabrio').config(theBlueCabrioConfig);

    /**
     * Sets up the application controller
     */
    angular.module('theBlueCabrio').controller('theBlueCabrioController', theBlueCabrioController);

})();
