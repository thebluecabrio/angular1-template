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
    * Sets up application configuration
    */
    angular.module('theBlueCabrio').config(theBlueCabrioConfig);

})();
