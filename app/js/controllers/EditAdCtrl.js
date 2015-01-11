adsApp.controller('EditAdCtrl', ['$scope', '$routeParams', 'UserData', '$route', function($scope, $routeParams, UserData, $route){
    //Getting the params passed by the $routeParams - id of the Ad

    $scope.model = {
        singleAdId: $routeParams.singleAdId
    }

    // Getting current Ad that is clicked and store it $scope.editAdEntry

    UserData.getAdById(function($resp){
        $scope.editAdEntry = $resp;

    }, $scope.model.singleAdId);

    // Here we set changing image or not

    $scope.isChangedImage = false;

    $scope.changeImage = function(image){
        // TODO
    };

    $scope.deleteImage = function(){
        // TODO
    }

    $scope.editAd = function(ad){
        // TODO
    }
}]);
