import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';

import config from './app.config';

import AppComponent from './app.component';
import Components from './components';
import Common from './common';

angular.module('app', [uiRouter, Components, Common])
    .config(config)

    .component('app', AppComponent)

    .run(function($log) {
        'ngInject';
        $log.debug('Starting up..');
    });

