adsApp.controller('EditProfileCtrl', ['$scope', 'UserData', 'MainData', 'Notifications', '$location',
    function($scope, UserData, MainData, Notifications, $location){
    MainData.getTowns(function($resp){
       $scope.towns = $resp;
    });

    UserData.getUserProfile(function($resp){
        $scope.editProfile = $resp;
    });

    $scope.editCurrentProfile = function(user){
        var currentUserProfile = {
            name : user.name,
            email : user.email + '',
            phoneNumber : user.phoneNumber,
            townId : user.townId || null
        }

        UserData.editUserProfile(function($resp){
            Notifications.successMsg($resp.message);
            $location.path('/user/home');
        }, currentUserProfile);
    }
}]);