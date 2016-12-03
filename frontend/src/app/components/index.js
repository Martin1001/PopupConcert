import angular from 'angular';
import mapView from './mapView';
import landing from './landing';
import datepickerPopup from 'angular-ui-bootstrap/src/datepickerPopup';

let componentsModule = angular.module('app.components', [landing, mapView, datepickerPopup]);

export default componentsModule.name;