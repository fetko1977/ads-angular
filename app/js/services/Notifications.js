adsApp.factory('Notifications', function(){
    return {
        successMsg : function(msg){
            toastr.clear();
            toastr.options.positionClass = 'toast-top-center';
            toastr.options.closeButton = true;
            toastr.options.showMethod = 'slideDown';
            toastr.options.hideMethod = 'slideUp';
            toastr.options.timeOut = 5000;
            toastr.success(msg);
        },

        errorMsg : function(msg){
            toastr.clear();
            toastr.options.positionClass = 'toast-top-center';
            toastr.options.closeButton = true;
            toastr.options.showMethod = 'slideDown';
            toastr.options.hideMethod = 'slideUp';
            toastr.options.timeOut = 5000;
            toastr.error('' + msg);
        },

        warningMsg : function(msg){
            toastr.clear();
            toastr.options.positionClass = 'toast-top-center';
            toastr.options.closeButton = true;
            toastr.options.showMethod = 'slideDown';
            toastr.options.hideMethod = 'slideUp';
            toastr.options.timeOut = 5000;
            toastr ['warning']('' + msg);
        }
    }
})
