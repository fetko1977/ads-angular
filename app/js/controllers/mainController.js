adsApp.controller('MainController', function($scope, MainData){
    //Pagination starts here
    var pageNumber = 1;
    $scope.ads = [];
    $scope.totalAds = 0;
    $scope.adsPerPage = 10; // this should match however many results your API puts on one page

    MainData.getAllAds(function(resp){
        $scope.data = resp;
        $scope.ads = $scope.data.ads;
        $scope.totalAds = $scope.data.numItems
    }, pageNumber);

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        MainData.getAllAds(function(resp){
            $scope.data = resp;
            $scope.ads = $scope.data.ads;
            $scope.totalAds = $scope.data.numItems
        }, newPage);
    };

    MainData.getAdsCategories(function(resp){
        $scope.categories = resp;
    });

    MainData.getAdsTowns(function(resp){
        $scope.towns = resp;
    });
});
