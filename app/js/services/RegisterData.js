adsApp.factory('RegisterData', function($http, $log){
    return {
        register : function ($success, user) {
            var url = 'http://softuni-ads.azurewebsites.net/api/user/register';
            $http({method:'POST', url: url, data: user})
                .success(function(data) {
                    console.log(data);
                }).
                error(function(data) {
                    $log.warn(data);
                });
        }
    }
})
