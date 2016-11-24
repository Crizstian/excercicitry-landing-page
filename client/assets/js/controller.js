/*
* Copyright (c) 2015, Cristian Ramirez Rosas, Copyright Holder All Rights Reserved.
*/
angular.module("app")
.controller("homeCtrl", function ($scope, $stateParams, $state, $controller) {
  //angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

})
.controller("nosotrosCtrl", function ($scope, $stateParams, $state, $controller) {
  angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

})
.controller("contactoCtrl", function ($scope, $stateParams, $state, $controller) {
  angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

});
