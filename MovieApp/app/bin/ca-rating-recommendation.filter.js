(function(){
    
    function filter(originalData,base,showRatingValue){

        base=base||10;
        
        console.log('base',base);
        
        

        var rating=parseFloat(originalData);
        var recommend=[
            "Terrible. Don't waste your Time",
            "Terrible. Don't waste your Time",

            "Only if you have nothing to do",
            "Only if you have nothing to do",

            "Time Pass",
            "Time Pass",

            "Good You Should Watch it",
            "Good You Should Watch it",

            "Don't Dare to Miss This one",
            "Don't Dare to Miss This one"

        ];
        
        var result= recommend[Math.floor(rating*10/base)];
        if(showRatingValue)
            result=`${result} (${rating}/${base})`;
        return result;
    }

    angular
        .module('ca-utils')
        .filter('recommend',function(){
            return filter;
        });


})();