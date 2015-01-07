adsApp.factory('UserData', function($http, Notifications, $rootScope){
    return {
        getAllUserAds : function(success, pageNumber){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/ads?pagesize=10&startpage=' + pageNumber;
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'GET', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.error_description);
                    console.log('problem1');
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
                    Notifications.errorMsg(data.error_description);
                });
        },

        getUserAdsByStatus: function(success, pageNumber, status){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/ads?pagesize=10&startpage=' + pageNumber;
            if(status){
                url += '&status=' + status;
            }
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'GET', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.error_description);
                    console.log('problem2');
                });
        },

        deactivate : function(success, id){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/' + id;
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'PUT', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.error_description);
                });
        },

        publishAgain : function(success, id){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/ads/publishagain/' + id;
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'PUT', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.error_description);
                });
        },

        getAdById : function(success, id) {
            var url = 'http://softuni-ads.azurewebsites.net/api/user/ads/' + id;
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'GET', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.error_description);
                    console.log('problem3');
                });
        },

        delete : function(success, id){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/ads/' + id;
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'DELETE', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.error_description);
                });
        }
    }
});
