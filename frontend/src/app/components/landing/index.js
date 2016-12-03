import angular from "angular";
import uirouter from "angular-ui-router";
import component from "./landing.component";

export default angular.module('app.landing', [uirouter])
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('landing', {
                url: '/',
                component: 'landing'
            });
    })
    .component('landing', component)
    .name;
