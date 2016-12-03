import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';

import config from './app.config';

import AppComponent from './app.component';
import Components from './components';
import Common from './common';
import _ from 'lodash';

require('ngMap');

angular.module('app', [uiRouter, Components, Common, 'ngMap'])
    .config(config)
    .constant('_', window._)
    .component('app', AppComponent)

    .run(function($log) {
        'ngInject';
        $log.debug('Starting up..');
    });

