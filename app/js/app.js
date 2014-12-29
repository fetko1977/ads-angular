var adsApp = angular.module('adsApp', ['ngRoute', 'angularUtils.directives.dirPagination'])
.config(function($routeProvider){
        $routeProvider.when('/',
            {
                templateUrl:'templates/all-ads.html'
            }
        );
        $routeProvider.when('/login',
            {
                templateUrl:'templates/login.html'
            }
        );
        $routeProvider.when('/register',
            {
                templateUrl:'templates/register.html'
            }
        );
        $routeProvider.otherwise({redirectTo: '/'});
    });

adsApp.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('templates/dirPagination.tpl.html');
});

