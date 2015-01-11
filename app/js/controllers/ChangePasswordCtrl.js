adsApp.controller('ChangePasswordCtrl', ['$scope', 'UserData', 'Notifications', function($scope, UserData, Notifications){
    $scope.changePassword = function(user){
        var passwordData = {
            oldPassword : user.password,
            newPassword : user.newPassword,
            confirmPassword : user.newPasswordAgain
        };

        UserData.changeUserPassword(function($resp){
            Notifications.successMsg($resp.message)
        }, user);
    }
}]);
