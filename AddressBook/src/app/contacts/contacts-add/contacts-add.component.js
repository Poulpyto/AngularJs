/**
 * Created by PC-01 on 18/07/2017.
 */

import angular from 'angular';
import contactsAddTemplate from './contacts-add.template.html';
import { contactServiceModule } from '../../service/contact.service';

export const contactsAddModule = angular.module('contacts-add.component', [
  contactServiceModule.name,
]);

class ContactAddCtrl{
  constructor(contactService, $state){
    this.contactService = contactService;
    this.$state=$state;
  }
  addContact(){
    this.contactService.create(this.contact)
      .then(() => {
      this.$state.go('contacts-list');
    });
  }
}

ContactAddCtrl.$inject = ['contactService', '$state'];
contactsAddModule.component('contactsAdd',{
  controller: ContactAddCtrl,
  template: contactsAddTemplate
});