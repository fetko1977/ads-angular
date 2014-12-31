adsApp.controller('RegisterController', function($scope, MainData, RegisterData){
    var user;

    MainData.getTowns(function(resp){
        $scope.towns = resp;
    });

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
        }, user);
    }
});
