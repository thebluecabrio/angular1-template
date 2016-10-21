(function () {

    var indexController = function ($scope, $log) {

      $scope.testing = 'If you can see this, then angular is working! Congrats!!!';

      $log.log('  _______ _            ____  _               _____      _          _');
      $log.log(' |__   __| |          |  _ \\| |             / ____|    | |        (_)');
      $log.log('    | |  | |__   ___  | |_) | |_   _  ___  | |     __ _| |__  _ __ _  ___');
      $log.log('    | |  | \'_ \\ / _ \\ |  _ <| | | | |/ _ \\ | |    / _` | \'_ \\| \'__| |/ _ \\ ');
      $log.log('    | |  | | | |  __/ | |_) | | |_| |  __/ | |___| (_| | |_) | |  | | (_) |');
      $log.log('    |_|  |_| |_|\\___| |____/|_|\\__,_|\\___|  \\_____\\__,_|_.__/|_|  |_|\\___/');
      $log.log('%c Welcome to The Blue Cabrio - Thanks for checking our console out ;)', 'font-weight:bold; color:white; background-color:navy');


    };

    angular.module('theBlueCabrio').controller('indexController', indexController);

})();
