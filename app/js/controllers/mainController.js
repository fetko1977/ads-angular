adsApp.controller('MainController', function($scope, MainData){
    MainData.getAllAds(function(resp){
        $scope.data = resp;
    });
    MainData.getAdsCategories(function(resp){
        $scope.categories = resp;
    });
    MainData.getAdsTowns(function(resp){
        $scope.towns = resp;
    });
});
