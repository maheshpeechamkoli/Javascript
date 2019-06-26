(function(){

    var template=`
    <div class='row' style='width:150px'>
        <button class='col-md-4' 
                ng-click='decrement()' 
                ng-disabled="bottomHit" 
                class='btn btn-sm btn-danger'>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <span class='col-md-4'>{{value}}</span>
        <button class='col-md-4' 
        ng-click='increment()' 
        ng-disabled="topHit" 
        class='btn btn-sm btn-primary'>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
    </div>
        `;

    function link(scope){

        var _min= scope.min || NaN;
        var _max= scope.max || NaN;
        var _delta=scope.delta || 1;

        _min=+_min;
        _max=+_max;
        _delta=+_delta;


        scope.value=+scope.value;

        scope.bottomHit=false;
        scope.topHit=false;

        scope.increment=function(){
            change(_delta);
        };
        scope.decrement=function(){
            change(-_delta);
        };

        function change(d){
            var newValue=scope.value+d;
            scope.topHit=false;
            scope.bottomHit=false;
            if(!isNaN(_min) && newValue<_min){
                newValue=_min;
                scope.bottomHit=true;
            }
            if(!isNaN(_max) && newValue>_max){
                newValue=_max;
                scope.topHit=true;
            };

            if(scope.value!=newValue){
                scope.value=newValue;
                //fire an event that parent can handle
                //call to the parent object function
                scope.changed({value:newValue});
            }

        }
    };


    var directive={
        link:link,
        restrict:'E',
        replace:true,
        template:template,
        scope:{
            value:'=',
            min:'<',
            max:'<',
            delta:'<',
            changed:'&' //event that the range will fire
        }
    };

    angular
        .module('ca-utils')
        .directive('range',function(){
            return directive;
        });
})();