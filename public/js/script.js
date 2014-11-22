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
                // controller  : 'registrationController'
            })

             // route for the about page
            .when('/feed', {
                templateUrl : 'templates/feed.html',
                controller  : 'feedController'
            })

            // route for the about page
            .when('/map-search', {
                templateUrl : 'templates/map-search.html',
                // controller  : 'mapSearchController'
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

    heiferApp.controller('feedController', function($scope) {
            $scope.datas = [ 
            {title: "This is a test", content: "lorem ipsum", location: "Africa", author: "Todd Kronenburg"},
            {title: "This is a test 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi neque, malesuada eget dolor vitae, fermentum varius ante. Ut vehicula libero mattis faucibus pulvinar. Nam ultrices varius magna vitae sodales. Proin eget vulputate metus, ac ullamcorper nibh. Quisque nec purus ac erat imperdiet viverra quis eu risus. Suspendisse efficitur cursus eros a vulputate. Cras eu hendrerit mi. Aliquam viverra, neque vitae volutpat vehicula, erat risus rhoncus nulla, ut suscipit sapien elit et massa.", location: "USA", author: "Ryan Janvier"}


            ];
          });
