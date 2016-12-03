import angular from "angular";
import uirouter from "angular-ui-router";
import component from "./main.component";
import services from "./services";

export default angular.module('app.main', [uirouter, services])
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('main', {
                url: '/',
                component: 'main'
            });
    })
    .component('main', component)
    .name;
