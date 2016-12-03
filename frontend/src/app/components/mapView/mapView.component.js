import template from './mapView.html';
import controller from './mapView.controller';
import './mapView.scss'

let mapViewComponent = {
    restrict: 'E',
    bindings: {},
    template: template.toString(),
    controller: controller,
    controllerAs: 'mapViewCtrl'
};

export default mapViewComponent;