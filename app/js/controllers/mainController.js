adsApp.controller('MainController', function($scope, MainData){
    //Pagination starts here
    var pageNumber = 1;
    var categoryId, townId;
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
        }, newPage);
    };

    $scope.filterByCategory = function(id) {
        categoryId = id;
        MainData.getAllAds(function(resp){
            $scope.data = resp;
        }, pageNumber, categoryId, townId);
    };

    $scope.filterByTown = function(id) {
        townId = id;
        MainData.getAllAds(function(resp){
            $scope.data = resp;
        }, pageNumber, categoryId, townId);
    };

    MainData.getCategories(function(resp){
        $scope.categories = resp;
    });

    MainData.getTowns(function(resp){
        $scope.towns = resp;
    });

    $scope.isSelectedCategory = function(element){
        console.log(element);
        return $scope.selectedCategory === element;
    };

    $scope.setActiveCategory = function(element){
        $scope.selectedCategory = element;
    };

    $scope.isSelectedTown = function(element){
        console.log(element);
        return $scope.selectedTown === element;
    };

    $scope.setActiveTown = function(element){
        $scope.selectedTown = element;
    };
});
