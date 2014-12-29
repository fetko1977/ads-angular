adsApp.controller('MainController', function($scope, adsMainData){
    adsMainData.getAllAds(function(resp){
        $scope.data = resp;
    });
});
