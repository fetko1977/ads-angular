var adsApp = angular.module('adsApp', ['ngRoute', 'angularUtils.directives.dirPagination', 'ngCookies'])
.config(function($routeProvider){
        $routeProvider.when('/',
            {
                templateUrl:'templates/all-ads.html',
                controller: 'MainController'
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
        $routeProvider.when('/user/home',
            {
                templateUrl:'templates/userhome.html'
            }
        );
        $routeProvider.when('/user/ads',
            {
                templateUrl:'templates/userads.html'
            }
        );
        $routeProvider.when('/user/publish',
            {
                templateUrl:'templates/userpublish.html'
            }
        );
        $routeProvider.when('/user/editprofile',
            {
                templateUrl:'templates/editprofile.html'
            }
        );
        $routeProvider.otherwise({redirectTo: '/'});
    });

// Added set of the template path for pagination template
adsApp.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('templates/dirPagination.tpl.html');
});

adsApp.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};

        $rootScope.$on('$locationChangeStart', function () {

            if ($location.path() !== '/login' && $location.path() !== '/register' && $location.path() !== '/' && !$rootScope.globals.currentUser) {
                $location.path('/');
            }
        });
    }]);