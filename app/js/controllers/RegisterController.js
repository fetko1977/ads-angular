adsApp.controller('RegisterController', function($scope, MainData, RegisterData, Auth, $location){
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
            Auth.setCredentials($scope.data);
            $location.path('/user/home');
        }, user);
    }
});
