adsApp.factory('MainData', function($http, Notifications){
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
                    Notifications.errorMsg(data.error_description);
                });
        },
        getCategories : function(success){
            $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/categories'})
                .success(function(data) {
                    success(data);
                }).
                error(function(data) {
                    Notifications.errorMsg(data.error_description);
                });
        },
        getTowns : function(success){
            $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/towns'})
                .success(function(data) {
                    success(data);
                }).
                error(function(data) {
                    Notifications.errorMsg(data.error_description);
                });
        }
    }
});
