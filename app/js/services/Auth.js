adsApp.factory('Auth', function($cookies, $cookieStore, $rootScope){
    return {
        setCredentials : function(data){
            $rootScope.globals = {
                currentUser: {
                    username: data.username,
                    access_token: data.access_token
                }
            };

            $cookieStore.put('globals', $rootScope.globals);
        },

        clearCredentials : function(){
            $rootScope.globals = {};
            $cookieStore.remove('globals');
        }
    }
})
