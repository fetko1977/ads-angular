adsApp.controller('LoginController', function($scope, LoginData, Auth, $location){
    var user;

    $scope.loginUser = function(userObj){
        user = {
            "username": userObj.username,
            "password": userObj.password
        };

        LoginData.login(function($resp){
            $scope.data = $resp;
            Auth.setCredentials($scope.data);
            $location.path('/user');
        }, user);
    }
});
