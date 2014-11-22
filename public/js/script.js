var heiferApp = angular.module('heiferHub', ['ngRoute']);
Parse.initialize("VLocePH0LazVLJVwfucZBRmihvfPiIITR6is2EVD", "Ir6EOlcEXSPlsrpMbdhpapJaPvpFwAiQncwSmkC7");



// Angular Controller for Registration of new User
heiferApp.controller('registrationController', function($scope) {
    $scope.submit = function() {
        var Users = Parse.Object.extend("Users");
        var user = new Users();

        // make sure password and confirm password match
        if ($scope.passwd != $scope.confirmPasswd) {
            alert("passwords don't match!");
            return;
        }

        // stupid way to get expertise in a good array because forEach wasn't working
        var expertise = $scope.expertise.split(",");
        for (var i=0; i<expertise.length; i++)
            expertise[i] = expertise[i].trim();

        user.set("Name", $scope.fullName);
        user.set("Password", $scope.passwd);
        user.set("Office", $scope.cityCountry);
        user.set("Position", $scope.position);
        user.set("Expertise", expertise);
        user.set("Picture", $scope.picture);
        user.set("Phone", $scope.phone);
        user.set("Email", $scope.email);

        user.save(null, {
            success: function(user) {
                console.log("\n\n\nuser saved in\n\n\n");
            },
            error: function(user, error) {
                console.log("\n\n\nfailed to create new object\n\n\n");
            }
        })

    };
});



  // // should save login info to parse database
  // heiferApp.controller('testMongo', function($scope) {
  //   $scope.submit = function() {
  //     // function refreshParse() {
  //     Parse.initialize("VLocePH0LazVLJVwfucZBRmihvfPiIITR6is2EVD", "Ir6EOlcEXSPlsrpMbdhpapJaPvpFwAiQncwSmkC7");

  //     var Users = Parse.Object.extend("Users");
  //     var user = new Users();

  //     console.log("email: " + $scope.email);
  //     console.log("passwd: " + $scope.passwd);
  //     user.set("Email", $scope.email);
  //     user.set("Password", $scope.passwd);

  //     user.save(null, {
  //       success: function(user) {
  //         console.log("user was saved");
  //       },
  //       error: function(user, error) {
  //         console.log("failed to create new object");
  //       }
  //     });
  //   };
  // });

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

            // route for the about page
            .when('/map-search', {
                templateUrl : 'templates/map-search.html',
                controller  : 'mapSearchController'
            })
    });

    // create the controller and inject Angular's $scope
    heiferApp.controller('mainController', function($scope) {
        // create a message to display in our view
        // $scope.message = 'Everyone come and see how good I look!';
        $scope.submit = function() {
            var Users = Parse.Object.extend("Users");
            // var user = new Users();
            var query = new Parse.Query(Users);
            console.log($scope.email);
            console.log($scope.passwd);
            query.equalTo("Email", $scope.email);
            query.equalTo("Password", $scope.passwd);
            query.find({
                success: function(results) {
                    // Parse isn't doing its job and always returns true
                    // even with no matching results, so to handle login
                    // failures vs. success i check results.length here:
                    if (results.length > 0) {
                        location.href="/#/feed";
                    } else { console.log("jams failed"); }
                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        };
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
