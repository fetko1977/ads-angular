adsApp.controller('ChangePasswordCtrl', ['$scope', 'UserData', 'Notifications', '$location', function($scope, UserData, Notifications, $location){
    $scope.changePassword = function(user){
        var passwordData = {
            oldPassword : user.password,
            newPassword : user.newPassword,
            confirmPassword : user.newPasswordAgain
        };

        UserData.changeUserPassword(function($resp){
            Notifications.successMsg($resp.message)
            $location.path('/user/home');
        }, passwordData);
    }
}]);
