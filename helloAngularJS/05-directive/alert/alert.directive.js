/**
 * Created by PC-01 on 18/07/2017.
 */

(function () {
  'use strict';
  const module = angular.module('alert.directive', []);
  module.directive('afAlert', function(){
    return {
      restrict: 'E',// E == element
      scope: {
        message: '='
      },
      templateUrl:'./alert/alert.template.html'
    };
  });
}());
