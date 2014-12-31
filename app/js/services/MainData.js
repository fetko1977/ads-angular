adsApp.factory('MainData', function($http, $log){
    return {
        getAllAds : function(success, pageNumber, categoryId, townId){
            var adsUrl = 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=10&startpage=' + pageNumber;
            if(categoryId){
                adsUrl += '&categoryId=' + categoryId;
            }

            if(townId){
                adsUrl += '&townId=' + townId;
            }

            $http({method:'GET', url: adsUrl})
                .success(function(data) {
                    success(data);
                }).
                error(function(data) {
                    $log.warn(data);
                });
        },
        getCategories : function(success){
            $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/categories'})
                .success(function(data) {
                    success(data);
                }).
                error(function(data) {
                    $log.warn(data);
                });
        },
        getTowns : function(success){
            $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/towns'})
                .success(function(data) {
                    success(data);
                }).
                error(function(data) {
                    $log.warn(data);
                });
        }
    }
});
