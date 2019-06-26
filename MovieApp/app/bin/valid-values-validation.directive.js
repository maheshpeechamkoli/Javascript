(function(){
    angular
    .module('ca-utils')
    .directive('validValues', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
        var params=attrs.validValues;
        ctrl.$validators.validValues = function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
                // consider empty models to be valid
                return true;
            }
            //TODO: validate viewValue here
             var isValid=false; //do the validation logic below
            var values=params.toLowerCase().split('|');
            var v=viewValue.toLowerCase();
            var s='heelo';
            
            for(let value of values){
                if(value==v) 
                    return true;
            }
            return isValid;
    };
      }
    };
    });
})();