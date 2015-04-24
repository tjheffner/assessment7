var studentsRoster = angular.module('studentsRoster', ['ui.router']);

studentsRoster.config(function($stateProvider) {

//main page
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

//student sign in
  $stateProvider.state('signin', {
    url: "/signin",
    templateUrl: "partials/signin.html",
    controller: 'StudentsCtrl'
  });

//full roster
  $stateProvider.state('roster', {
    url: "/roster",
    templateUrl: "partials/roster.html",
    controller: 'StudentsCtrl'
  });

});
