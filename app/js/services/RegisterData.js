adsApp.factory('RegisterData', function($http, Notifications){
    return {
        register : function ($success, user) {
            var url = 'http://softuni-ads.azurewebsites.net/api/user/register';
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
