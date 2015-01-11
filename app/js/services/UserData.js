adsApp.factory('UserData', function($http, Notifications, $rootScope){
    return {
        getAllUserAds : function(success, pageNumber, status){
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
        },

        edit: function(success, dataAd, id){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/ads/' + id;
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'PUT', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}}, dataAd)
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.error_description);
                });
        },

        getUserProfile: function(success){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/profile';
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'GET', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.error_description);
                });
        },

        editUserProfile: function(success, user){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/profile';
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'PUT', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}, data: user})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.message);
                });
        },

        changeUserPassword: function(success, user){
            var url = 'http://softuni-ads.azurewebsites.net/api/user/changePassword';
            var currentUserToken = $rootScope.globals.currentUser.access_token;
            $http({method: 'PUT', url: url, headers: {Authorization: 'Bearer ' + currentUserToken}, data: user})
                .success(function(data){
                    success(data);
                })
                .error(function(data){
                    Notifications.errorMsg(data.message);
                });
        }
    }
});
