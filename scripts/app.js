  /*Made by AlexT */
  /*Using http://krispo.github.io/angular-nvd3/#/quickstart */
  /*Tool to check JSOn format  http://jsonlint.com/ */
  
'use strict';

angular.module('ProfileApp', ['ngRoute','nvd3','APIServices'])
  .config(['$routeProvider', '$httpProvider','$compileProvider', function ($routeProvider,$httpProvider,$compileProvider) {


    /*$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];*/
    
    $routeProvider
    //POC EXAMPLES
      .when('/example1', {
        templateUrl: 'views/site/example1.html',
        controller: 'example1Ctrl'
      })
      .when('/example2', {
        templateUrl: 'views/site/example2.html',
        controller: 'example2Ctrl'
      })
      .when('/example3', {
        templateUrl: 'views/site/example3.html',
        controller: 'example3Ctrl'
      })
      .when('/example4', {
        templateUrl: 'views/site/example4.html',
        controller: 'example4Ctrl'
      })
      .when('/example5', {
        templateUrl: 'views/site/example5.html',
        controller: 'example5Ctrl'
      })
      .when('/example6', {
        templateUrl: 'views/site/example6.html',
        controller: 'example6Ctrl'
      })
    //MAIN PROJECT
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'welcomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

  //----- Main configuration ----//

  //users credentials
    var user={
      github:"atreliz",
      linkedin:"atreliz",
      twitter:"atreliz"
    };


  //site Urls
    var serviceUrl;
    var url={
      github:"https://api.github.com",
      linkedin:"atreliz",
      twitter:"atreliz"
    };

    var linkedinData;



    //detect the Git hub user from query param, or atreliz as default
    //ie: http://localhost:9000/#/?github=Quaiks

      function detectGitHubUserOnQuery(){
            if(location.hash.indexOf("#/?github=")>=0){
                return location.hash.replace("#/?github=","");
            }else{
              return "atreliz";
            }
        };

       user.github=detectGitHubUserOnQuery();

  



