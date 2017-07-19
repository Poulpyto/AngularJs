/**
 * Created by PC-01 on 18/07/2017.
 */
class PrenomCtrl {
  constructor(){
    this.prenoms = [];
  }
  addPrenom(){
    this.prenoms.push(this.prenom);
    this.prenom = '';
  };
  delPrenom(i){
    this.prenoms.splice(i, 1);
  };
}
angular.module('app', [])
  .controller('PrenomCtrl', PrenomCtrl);
/* //equivalent a au dessus
angular.module('app', [])
  .controller('PrenomCtrl', [function() {
  this.prenoms = [];
  this.addPrenom = function () {
    this.prenoms.push(this.prenom);
    this.prenom = '';
    };
  this.delPrenom = function (i) {
    this.prenoms.splice(i, 1);
  }
  }]);*/