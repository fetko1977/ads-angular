adsApp.controller('LoginCtrl', function($scope, $rootScope, LoginData, Auth, $location, Notifications){
    var user;

    $scope.loginUser = function(userObj){
        user = {
            "username": userObj.username,
            "password": userObj.password
        };

        LoginData.login(function($resp){
            $scope.data = $resp;
            var msg = 'You are logged in successfully ' + $scope.data.username + '!';
            Auth.setCredentials($scope.data);
            Notifications.successMsg(msg);
            $location.path('/user/home');
        }, user);
    }
});
