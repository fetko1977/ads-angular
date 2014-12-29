adsApp.factory('adsMainData', function($http, $log){
    return {
        getAllAds : function(success){
            $http.get('http://softuni-ads.azurewebsites.net/api/ads?pagesize=10&startpage=1')
                .success(function(data, status, headers, config) {
                    success(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data);
                });
        }
    }
});
