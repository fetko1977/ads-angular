adsApp.controller('UserController', function($scope, $rootScope, $location, UserData, MainData){

    //Pagination starts here
    var pageNumber = 1;
    var categoryId, townId;
    $scope.ads = [];
    $scope.totalAds = 0;
    $scope.adsPerPage = 10; // this should match however many results your API puts on one page

    UserData.getAllUserAds(function(resp){
        $scope.data = resp;
        $scope.ads = $scope.data.ads;
        $scope.totalAds = $scope.data.numItems
    }, pageNumber);

    $scope.statusAd = ['Inactive', 'Waiting Approval', 'Published', 'Rejected'];

    $scope.showMe = function(value){
        console.log(value);
    }


    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        UserData.getAllUserAds(function(resp){
            $scope.data = resp;
        }, newPage);
    };

    MainData.getCategories(function(resp){
        $scope.categories = resp;
    });

    MainData.getTowns(function(resp){
        $scope.towns = resp;
    });

    $scope.isSelectedCategory = function(category){
        return $scope.selectedCategory === category;
    }

    $scope.setActiveCategory = function(category){
        $scope.selectedCategory = category;
    }

    $scope.isSelectedTown = function(town){
        return $scope.selectedTown === town;
    }

    $scope.setActiveTown = function(town){
        $scope.selectedTown = town;
    }

    $scope.adData = {townId: null, categoryId: null};

    $scope.fileSelected = function(fileInputField) {
        delete $scope.adData.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.adData.imageDataUrl = reader.result;
                angular.element(document.querySelector('.image-box')).html("<img src='" + reader.result + "' width='100px' height='auto'>");
            };
            reader.readAsDataURL(file);
        } else {
            angular.element(document.querySelector('.image-box')).html("<p>File type not supported!</p>");
        }
    };

    $scope.publishAd = function(data){
        UserData.publishUserAd(function($resp){
            $location.path('/user/ads');
        }, data);
    }
});
