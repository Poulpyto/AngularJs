/**
 * Created by PC-01 on 19/07/2017.
 */

import angular from 'angular';

export const contactServiceModule = angular.module('contact.service', []);

const RESSOURCE_URL = 'http://localhost:3000/contacts';

class ContactService {
  constructor($http){
    this.$http = $http;
  }
  getAll(){
    return this.$http.get(RESSOURCE_URL);
  }
  create(contact){
    return this.$http.post(RESSOURCE_URL, contact);
  }
  remove(id){
    return this.$http.delete(RESSOURCE_URL + '/' + id);
  }
}
ContactService.$inject = ['$http'];
contactServiceModule.service('contactService', ContactService);