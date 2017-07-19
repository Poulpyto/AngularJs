/**
 * Created by PC-01 on 18/07/2017.
 */

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import './app.style.css';


import { contactsModule } from './contacts/contacts.module';
import { topBar } from './top-bar/top-bar.component';
import { homePage } from './home-page/home-page.component'

const appmodule = angular.module('app.module', [
  contactsModule.name,
  topBar.name,
  homePage.name,
  uiRouter
]);

appmodule.config(['$stateProvider', function($stateProvider){
  $stateProvider.state({
    name: 'home-page',
    url: '/',
    component: 'homePage'
  });

}]);


//contactModule();