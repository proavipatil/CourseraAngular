(function () {
'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController',function ($scope) {

  $scope.name = "Jose Marianosss";
  $scope.sayHello = function () {
    return "Hello Coursera"

  }

});

}) ();
