var studentsRoster = angular.module('studentsRoster', ['ui.router']);

studentsRoster.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });


});
