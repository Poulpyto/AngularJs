/**
 * Created by PC-01 on 18/07/2017.
 */
(function () {
  'use strict';


  class PrenomCtrl {
    constructor(alertService) {
      this.prenoms = [];
      this.alertService = alertService;
    }

    addPrenom() {
      this.prenoms.push(this.prenom);
      this.alertService.addMessage('le contact ' + this.prenom+ ' a bien été ajouté');
      this.prenom = '';
    };

    delPrenom(i) {
      this.prenoms.splice(i, 1);
    };
  }
  const module = angular.module('prenom.controller', [
    'alert.module',
  ])
  module.controller('PrenomCtrl', PrenomCtrl);
}());
