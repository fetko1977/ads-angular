adsApp.controller('RegisterCtrl', function($scope, MainData, RegisterData, Auth, $location, Notifications){
    var user;

    // Getting the towns for the register form select

    MainData.getTowns(function(resp){
        $scope.towns = resp;
    });

    // Register user when the RegisterForm is submited

    $scope.registerUser = function(userObj){
        user = {
            "username": userObj.username,
            "password": userObj.password,
            "confirmPassword": userObj.confirmPassword,
            "name": userObj.name,
            "email": userObj.email,
            "phone": userObj.phone,
            "townId": userObj.town.id || null
        };

        RegisterData.register(function($resp){
            $scope.data = $resp;
            console.log($resp);
            var msg = 'Welcome to our website' + $scope.data.username + '!';
            Auth.setCredentials($scope.data);
            Notifications.successMsg(msg);
            $location.path('/user/home');
        }, user);
    }
});
