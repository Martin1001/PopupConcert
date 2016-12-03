import template from './main.html';
import controller from './main.controller';
import './main.scss'

let mainComponent = {
    restrict: 'E',
    bindings: {},
    template: template.toString(),
    controller: controller,
    controllerAs: 'mainCtrl'
};

export default mainComponent;