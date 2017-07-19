/**
 * Created by PC-01 on 18/07/2017.
 */
angular.module('app', [])
  .controller('PrenomCtrl', ['$scope', function($scope) {
  $scope.prenoms = [];
  $scope.addPrenom = function () {
    $scope.prenoms.push($scope.prenom);
    $scope.prenom = '';
    };
  $scope.delPrenom = function (i) {
    $scope.prenoms.splice(i, 1);

  }
  }]);