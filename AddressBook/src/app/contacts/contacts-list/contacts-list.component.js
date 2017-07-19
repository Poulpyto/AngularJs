/**
 * Created by PC-01 on 18/07/2017.
 */

import angular from 'angular';
import angularResource from 'angular-resource';
import contactsListTemplate from './contacts-list.template.html';
import { contactServiceModule } from '../../service/contact.service';

export const contactsListModule = angular.module('contacts-list.component', [
  //angularResource
  contactServiceModule.name,
]);

class ContactListCtrl {
  constructor(contactService){
    this.contacts = [];
    this.contactService = contactService;

    contactService.getAll()
      .then(res => {
        this.contacts =res.data;
      });
  }
  remove(i){
    this.contactService.remove(this.contacts[i].id)
      .then(() => {
        this.contacts.splice(i, 1);
      });

}

}
ContactListCtrl.$inject = ['contactService'];


/*class ContactListCtrl {
  constructor($resource) {
    this.contacts = [];

    const User = $resource('https://jsonplaceholder.typicode.com/users/:userId', {userId:'@id'});
    this.contacts = User.query();
  }
}
ContactListCtrl.$inject = ['$resource'];
*/
contactsListModule.component('contactsList',{
  controller: ContactListCtrl,
  template: contactsListTemplate
});