

function Calculator() {
    var numbers = [];

    //this.numbers=numbers;

    this.addToList = function (value) {
        if (!isNaN(value))
            numbers.push(value);

        return !isNaN(value);
    }

    this.sum = function () {
        var result = 0;
        for (var i = 0; i < numbers.length; i++)
            result += numbers[i];
        return result;
    };

    this.avg = function () {
        return this.sum() / numbers.length;
    }

    this.clear = function () {
        numbers = [];
    }

    this.getNumbers=function(){
        return numbers;
    };

    this.refresh=function(writer){
        writer.clear();
        for(var i=0;i<numbers.length;i++)
            writer.write(numbers[i]);
    }

    this.process=function(fn){
        
        for(var i=0;i<numbers.length;i++)
            fn(numbers[i],i);
    }
}








