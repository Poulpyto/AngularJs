/**
 * Created by PC-01 on 19/07/2017.
 */

import angular from 'angular';
import topBarTemplate from './top-bar.template.html';
export const topBar = angular.module('top-bar.component', []);
topBar.component('topBar',{
  template: topBarTemplate
});