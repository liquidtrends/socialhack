var heiferApp = angular.module('heiferHub', ['ngRoute']);
Parse.initialize("VLocePH0LazVLJVwfucZBRmihvfPiIITR6is2EVD", "Ir6EOlcEXSPlsrpMbdhpapJaPvpFwAiQncwSmkC7");

// $('#submitPost').click( function() {
//     $.ajax({
//         url: '/feed',
//         type: 'post',
//         dataType: 'json',
//         data: $('form[name=addPost]').serialize(),
//         success: function(data) {
//                    console.log(data);
//                  },
//                  error: function(data, err) {
//                     console.log(err);
//                  }
//     });
// });



heiferApp.controller('postController', function($scope) {


    $scope.submit = function() {
        var Post = Parse.Object.extend("Posts");
        var posts = new Post();


        // stupid way to get tags in a good array because forEach wasn't working
        // also dealing with if no tags are input
        if ($scope.tags == undefined) {
            $scope.tags = "";
        } else {
            var tags = $scope.tags.split(",");
            for (var i=0; i<tags.length; i++)
                tags[i] = tags[i].trim();
        }

        console.log("Title", $scope.title);
        console.log("PostTags", tags);
        console.log("Content", $scope.content);
        console.log("Youtube", $scope.youtube);
        console.log("Pictures", $scope.image);
        console.log("Files", $scope.file);

        posts.set("Title", $scope.title);
        posts.set("PostTags", tags);
        posts.set("Content", $scope.content);
        posts.set("Youtube", $scope.youtube);
        // posts.set("Pictures", $scope.image);
        // posts.set("Files", $scope.file);

        posts.save(null, {
            success: function(posts) {
                console.log("\n\n\npost saved in\n\n\n");
            },
            error: function(posts, error) {
                console.log("\n\n\nfailed to create new object\n\n\n");
            }
        });
    };
});


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
        if ($scope.expertise.trim().length) {
            var expertise = $scope.expertise.split(",");
            for (var i=0; i<expertise.length; i++)
                expertise[i] = expertise[i].trim();
        }

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
        });

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
                        // app.post('/', function(req, res) {
                        //     if (req.session.logged) res.send('Welcome back!');
                        //     else {
                        //         req.session.logged = true;
                        //         console.log('Welcome!');
                        //     }
                        // });
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


    heiferApp.controller('feedController', function($scope) {
            $scope.datas = [ 
            {title: "This is a test", content: "lorem ipsum", location: "Africa", author: "Todd Kronenburg", type: 2},
            {title: "This is a test 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi neque, malesuada eget dolor vitae, fermentum varius ante. Ut vehicula libero mattis faucibus pulvinar. Nam ultrices varius magna vitae sodales. Proin eget vulputate metus, ac ullamcorper nibh. Quisque nec purus ac erat imperdiet viverra quis eu risus. Suspendisse efficitur cursus eros a vulputate. Cras eu hendrerit mi. Aliquam viverra, neque vitae volutpat vehicula, erat risus rhoncus nulla, ut suscipit sapien elit et massa.", location: "USA", author: "Ryan Janvier", type: 1},
            {title: "Elizabeth's Textile Business in Peru", content: "<iframe width='560' height='315' src='//www.youtube.com/embed/GohqIUxgRx0?list=PLDpCJPATo8NQeYbxadqpf6cAArGgcBJSO' frameborder='0' allowfullscreen></iframe>", location: "Africa", author: "Todd Kronenburg", type: 1},


            ];
          });
