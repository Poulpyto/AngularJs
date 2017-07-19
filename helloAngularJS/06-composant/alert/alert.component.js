/**
 * Created by PC-01 on 18/07/2017.
 */

(function () {
  'use strict';
  const module = angular.module('alert.component', []);
  module.component('afAlert', {
      bindings: {
        message: '='
      },
      templateUrl:'./alert/alert.template.html'
  });
}());
