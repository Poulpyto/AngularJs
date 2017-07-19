/**
 * Created by PC-01 on 19/07/2017.
 */

import angular from 'angular';
import homePageTemplate from './home-page.template.html';
export const homePage = angular.module('home-page.component', []);
homePage.component('homePage',{
  template: homePageTemplate
});