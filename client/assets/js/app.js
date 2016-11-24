/*
* Copyright (c) 2015, Cristian Ramirez Rosas, Copyright Holder All Rights Reserved.
*/
(function() {
  'use strict';
  angular.module('app', [
  // Angular libraries
  'ui.router',
  'ngAnimate',
  // Foundation UI components
  'foundation',
  // Routing with front matter
  'foundation.dynamicRouting',
  // Transitioning between views
  'foundation.dynamicRouting.animations'
  ])
  .config(function config($urlRouterProvider, $locationProvider, $stateProvider) {
    // Default to the index view if the URL loaded is not found
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl',
        animation: {
          enter: 'slideOutLeft',
          leave: 'slideOutRight'
        }
      })
      .state('nosotros', {
        url: '/nosotros',
        templateUrl: 'templates/nosotros.html',
        controller: 'nosotrosCtrl',
        animation: {
          enter: 'slideOutLeft',
          leave: 'slideOutRight'
        }
      })
      .state('productos', {
        url: '/contacto',
        templateUrl: 'templates/productos.html',
        controller: 'productosCtrl',
        animation: {
          enter: 'slideOutLeft',
          leave: 'slideOutRight'
        }
      })
      .state('contacto', {
        url: '/contacto',
        templateUrl: 'templates/contacto.html',
        controller: 'contactoCtrl',
        animation: {
          enter: 'slideOutLeft',
          leave: 'slideOutRight'
        }
      });
    // Use this to enable HTML5 mode
    $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
    });
    // Use this to set the prefix for hash-bangs
    // Example: example.com/#!/page
    $locationProvider.hashPrefix('!');
  })
})();
