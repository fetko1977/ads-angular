adsApp.factory('LoginData', function($http, Notifications){
    return {
        login : function ($success, user) {
            var url = 'http://softuni-ads.azurewebsites.net/api/user/login';

            $http({method:'POST', url: url, data: user})
                .success(function(data) {
                    $success(data);
                }).
                error(function(data) {
                    Notifications.errorMsg(data.error_description);
                });
        }
    }
})
