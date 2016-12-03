import angular from 'angular';
import mocks from 'angular-mocks';

var testsContext = require.context("./src", true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);