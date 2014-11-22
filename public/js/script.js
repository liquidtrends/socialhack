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

             // route for the about page
            .when('/feed', {
                templateUrl : 'templates/feed.html',
                controller  : 'feedController'
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
        var m = {
            "Test Title1": "2",
            "Test Title2": "2",
            "Test Title3": "3",
            "Test Title4": "1",
            "Test Title5": "3",
            "Test Title6": "2"
        };
    heiferApp.controller('feedController', function($scope) {
            $scope.items = m;
    });
