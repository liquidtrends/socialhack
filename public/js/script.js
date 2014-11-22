var heiferApp = angular.module('heiferHub', ['ngRoute']);

    // configure our routes
    heiferApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/login.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/registration', {
                templateUrl : 'templates/registration.html',
                controller  : 'registrationController'
            })
    });

    // create the controller and inject Angular's $scope
    heiferApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    heiferApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    heiferApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
