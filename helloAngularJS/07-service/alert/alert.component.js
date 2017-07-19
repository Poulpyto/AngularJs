/**
 * Created by PC-01 on 18/07/2017.
 */

(function () {
  'use strict';
  const module = angular.module('alert.component', []);

  class AlertCtrl {
    constructor (alertService){
      this.messages = alertService.messages;
    }
    deleteMessage(i){
      this.messages.splice(i, 1);
    }
  }
  module.component('afAlert', {
      controller:AlertCtrl,
      templateUrl:'./alert/alert.template.html'
  });
}());
