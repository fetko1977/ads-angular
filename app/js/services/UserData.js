adsApp.factory('UserData', function($http, $log, $rootScope){
    return {
        getAllUserAds : function(success, pageNumber){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/ads?pagesize=10&startpage=' + pageNumber;
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'GET', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    $log.warn(data);
                });
        },
        publishUserAd: function(success, data){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/ads';
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'POST', url: url, data: data, headers: {Authorization: 'Bearer ' + currentUserToken}})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    $log.warn(data);
                });
        }
    }
});
