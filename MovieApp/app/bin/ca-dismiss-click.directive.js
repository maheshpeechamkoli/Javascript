(function(){
    
    function link(scope,element,attr){
        var event= attr.clickToDismiss||'click';
        var mode=attr.dismissMode || 'remove';

        element.on(event,function(){
            if(mode=='remove')
                element.remove(1000);
            else
                element.hide(1000);
        });
    }

    var directive={
        restrict:'AE',
        link:link
    }



    angular
        .module('ca-utils')
        .directive('clickToDismiss',function(){
            return directive;
        });


})();