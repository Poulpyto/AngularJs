/**
 * Created by PC-01 on 18/07/2017.
 */
(function () {
  'use strict';


  class PrenomCtrl {
    constructor() {
      this.prenoms = [];
    }

    addPrenom() {
      this.prenoms.push(this.prenom);
      this.prenom = '';
    };

    delPrenom(i) {
      this.prenoms.splice(i, 1);
    };
  }
  const module = angular.module('prenom.controller', [
    'alert.component',
  ])
  module.controller('PrenomCtrl', PrenomCtrl);
}());
