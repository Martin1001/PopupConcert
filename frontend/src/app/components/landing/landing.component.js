import template from './landing.html';
import controller from './landing.controller';
import './landing.scss'

let landingComponent = {
    restrict: 'E',
    bindings: {},
    template: template.toString(),
    controller: controller,
    controllerAs: 'landingCtrl'
};

export default landingComponent;