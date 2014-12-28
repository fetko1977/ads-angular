var adsApp = angular.module('adsApp', ['ngRoute'])
.config(function($routeProvider){
        $routeProvider.when('/login',
            {
                templateUrl:'templates/login.html'
            }
        )
            .when('/register',
            {
                templateUrl:'templates/register.html'
            }
        )
    });

