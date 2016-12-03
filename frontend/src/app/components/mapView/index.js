import angular from "angular";
import uirouter from "angular-ui-router";
import component from "./mapView.component";

export default angular.module('app.mapView', [uirouter])
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('mapView', {
                url: '/map',
                component: 'mapView'
            });
    })
    .component('mapView', component)
    .name;
