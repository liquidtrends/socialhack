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

// HANDLES THE SIGN IN BUTTON IN LOGIN.HTML
// heiferApp.controller('testMongo', function($scope, $http) {
//     $scope.submit = function() {
//         console.log($scope.email + ", " + $scope.passwd);
//         $http.post('/save/', { Email : $scope.email }).then(function(response) {
//             console.log("post to loginCheck was successful");
//         }, function(error) {
//             console.log("error at script.js: 41");
//         });
//             // success(function(data, status, headers, config) {
//             //     // code
//             //     console.log("post to loginCheck was successful");
//             // }).
//             // error(function(data, status, headers, config) {
//             //     // code
//             //     console.log("error at script.js: 44");
//             // });
//     };
// });


  // should save login info to parse database
  heiferApp.controller('testMongo', function($scope) {
    $scope.submit = function() {
      // function refreshParse() {
      Parse.initialize("VLocePH0LazVLJVwfucZBRmihvfPiIITR6is2EVD", "Ir6EOlcEXSPlsrpMbdhpapJaPvpFwAiQncwSmkC7");

      var Users = Parse.Object.extend("Users");
      var user = new Users();

      console.log("email: " + $scope.email);
      console.log("passwd: " + $scope.passwd);
      user.set("Email", $scope.email);
      user.set("Password", $scope.passwd);

      user.save(null, {
        success: function(user) {
          console.log("user was saved");
        },
        error: function(user, error) {
          console.log("failed to create new object");
        }
      });

      // var query = new Parse.Query(Users);
      // query.find({
      //     success: function(results) {
      //         var challenge = results.map(function(challenge) {
      //             challenge.attributes.id = challenge.id;
      //             return challenge.attributes;
      //         });
      //         obj={challenge: challenge};
      //         refreshChallenge( { challenge: challenge } );
      //     },
      //     error: function(error) {
      //         alert("Error: " + error.code + " " + error.message);
      //     }
      // });
    };
  });
