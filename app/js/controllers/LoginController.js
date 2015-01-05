adsApp.controller('LoginController', function($scope, $rootScope, LoginData, Auth, $location, toaster){
    var user;

    $scope.loginUser = function(userObj){
        user = {
            "username": userObj.username,
            "password": userObj.password
        };

        LoginData.login(function($resp){
            $scope.data = $resp;
            var username = $scope.data.username;
            Auth.setCredentials($scope.data);
            $rootScope.$broadcast('userSuccessfullyLoggedIn', username);
            $location.path('/user/home');
        }, user);
    }
});
