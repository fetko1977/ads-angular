adsApp.controller('UserCtrl', function($scope, $rootScope, $location, UserData, MainData, Notifications, $route, $routeParams){

    //Pagination settings starts here
    var pageNumber = 1;

    // Empty array to store asd retrieved from the database later
    $scope.ads = [];
    $scope.totalAds = 0;
    $scope.adsPerPage = 10;
    $scope.currentStatusFilter;

    $scope.statusAd = ['Inactive', 'WaitingApproval', 'Published', 'Rejected'];

    UserData.getAllUserAds(function(resp){
        $scope.data = resp;
        $scope.ads = $scope.data.ads;
        $scope.totalAds = $scope.data.numItems;
    }, pageNumber, $scope.currentStatusFilter);

    $scope.getStatusAds = function(status){
        $scope.currentStatusFilter = status;
        UserData.getAllUserAds(function(resp){
            $scope.data = resp;
            if($scope.data.ads.length === 0){
                Notifications.warningMsg('There is not ads with status of ' + status + '!');
            }
        }, pageNumber, $scope.currentStatusFilter);
    };

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        UserData.getAllUserAds(function(resp){
            $scope.data = resp;
        }, newPage, $scope.currentStatusFilter);
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

    $scope.isSelectedStatus = function(status){
        return $scope.selectedStatus === status;
    }

    $scope.setActiveStatus = function(status){
        $scope.selectedStatus = status;
    }

    $scope.adData = {townId: null, categoryId: null};

    $scope.fileSelected = function(fileInputField) {
        delete $scope.adData.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.adData.imageDataUrl = reader.result;
                angular.element(document.querySelector('.image-box')).html("<img src='" + reader.result + "' width='150px' height='auto'>");
            };
            reader.readAsDataURL(file);
        } else {
            angular.element(document.querySelector('.image-box')).html("<p>File type not supported!</p>");
        }
    };

    $scope.publishAd = function(data){
        UserData.publishUserAd(function(){
            Notifications.successMsg('You successfully added a new ad!');
            $location.path('/user/ads');
        }, data);
    }

    $scope.deactivateAd = function(id){
        UserData.deactivate(function($resp){
            $route.reload('/user/ads');
            Notifications.successMsg($resp.message);
        }, id);
    }

    $scope.checkStatus = function(status, button){
        switch (status){
            case 'Inactive' : switch (button){
                        case 'Deactivate' : return false; break;
                        case 'Edit' : return true; break;
                        case 'PublishAgain' : return true; break;
                        case 'Delete' : return true; break;
                        default : return false; break;
                    };
                break;
            case 'WaitingApproval' : switch (button){
                case 'Deactivate' : return true; break;
                case 'Edit' : return false; break;
                case 'PublishAgain' : return false; break;
                case 'Delete' : return false; break;
                default : return false; break;
            };
                break;
            case 'Published' : switch (button){
                case 'Deactivate' : return true; break;
                case 'Edit' : return false; break;
                case 'PublishAgain' : return false; break;
                case 'Delete' : return false; break;
                default : return false; break;
            };
                break;
            case 'Rejected' : switch (button){
                case 'Deactivate' : return false; break;
                case 'Edit' : return true; break;
                case 'PublishAgain' : return true; break;
                case 'Delete' : return true; break;
                default : return false; break;
            };
                break;
        }
    };

    $scope.publishAdAagain = function(id){
        UserData.publishAgain(function($resp){
            $route.reload('/user/ads');
            Notifications.successMsg($resp.message);
        }, id);
    };

    $rootScope.isChangedImage = false;

    $scope.changeImage = function(){
            $rootScope.isChangedImage = true;
    };

    $scope.deleteImage = function(image){
        delete image;
    };

    $scope.editAd = function(ad){

        /*UserData.edit(function($resp){
            Notifications.successMsg($resp);
        }, dataAd, $scope.model.singleAdId);*/
    };

});
