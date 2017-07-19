/**
 * Created by PC-01 on 18/07/2017.
 */

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import {contactsListModule} from './contacts-list/contacts-list.component';
import {contactsAddModule} from './contacts-add/contacts-add.component';


export const contactsModule = angular.module('contacts.module', [
  contactsListModule.name,
  contactsAddModule.name,
  uiRouter
]);

contactsModule.config(['$stateProvider', function($stateProvider){
  $stateProvider.state({
    name: 'contacts-list',
    url: '/contacts/list',
    component: 'contactsList'
  });
  $stateProvider.state({
    name: 'contacts-add',
    url: '/contacts/add',
    component: 'contactsAdd'
  });
  $stateProvider.state({
    name: 'contacts-show',
    url: '/contacts/:id',
    component: 'contactsShow'
  })

}]);

