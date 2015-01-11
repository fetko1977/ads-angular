adsApp.controller('DeleteAdCtrl', ['$scope', '$routeParams', 'UserData', '$location', function($scope, $routeParams, UserData, $location){
    //Getting the params passed by the $routeParams - id of the Ad
    $scope.model = {
        singleAdId: $routeParams.singleAdId
    }

    // Getting current Ad that is clicked

    UserData.getAdById(function($resp){
        $scope.currentAdEntry = $resp;
    }, $scope.model.singleAdId);

    // Delete current Ad

    $scope.deleteAd = function (id) {
        UserData.delete(function($resp) {
            $location.path('/user/ads');
            Notifications.successMsg($resp.message);
        }, id);
    };
}]);
