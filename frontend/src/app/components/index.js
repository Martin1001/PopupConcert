import angular from 'angular';
import main from './main';
import datepickerPopup from 'angular-ui-bootstrap/src/datepickerPopup';

let componentsModule = angular.module('app.components', [main, datepickerPopup]);

export default componentsModule.name;