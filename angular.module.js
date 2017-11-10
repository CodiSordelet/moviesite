// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/app/components/main/main.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/favorites', {
                templateUrl : 'favorites.html',
                controller  : 'favoritesController'
            })
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Search for movies by title or keyword and they will be displayed here!';
    });

    scotchApp.controller('favoritesController', function($scope) {
        $scope.message = 'All your favorite movies are displayed here!';
    });
