'use strict';

// Define the `phonecatApp` module
var app = angular.module('accounting-app', ['firebase', 'ui.router', 'ngMaterial']);


app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: './js/templates/main.html'
    })
    .state('resources', {
        url:'/resources',
        templateUrl: './js/templates/tax-resources.html'
    })
})