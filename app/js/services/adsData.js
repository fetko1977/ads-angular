adsApp.factory('MainData', function($http, $log){
    return {
        getAllAds : function(success, pageNumber){
            var adsUrl = 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=10&startpage=';
            $http({method:'GET', url: adsUrl + pageNumber})
                .success(function(data) {
                    success(data);
                }).
                error(function(data) {
                    $log.warn(data);
                });
        },
        getAdsCategories : function(success){
            $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/categories'})
                .success(function(data, status, headers, config) {
                    success(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data);
                });
        },
        getAdsTowns : function(success){
            $http({method:'GET', url:'http://softuni-ads.azurewebsites.net/api/towns'})
                .success(function(data, status, headers, config) {
                    success(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data);
                });
        }
    }
});
