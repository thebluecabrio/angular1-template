describe('indexController', function() {

  beforeEach(module('theBlueCabrio'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.testing', function() {

    it('testing scope', function() {

      debugger;

      var $scope = {};
      var controller = $controller('indexController', { $scope: $scope });

      expect($scope.testing).toEqual('If you can see this, then angular is working! Congrats!!!');
    });

  });
});
