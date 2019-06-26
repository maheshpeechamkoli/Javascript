
        var app=(function() {
            var calc = new Calculator();          //var numbers=[];
            var numberBox = new io.Input('number');  //var numberBox=document.getElementById('number');

            var numberList = new io.Writer('numberList', 'li');   //document.getElementById('numberList');
            var consoleWriter = new io.Writer('console');        //document.getElementById('console');

            function addToList() {

                var number = numberBox.readNumber();

                if (calc.addToList(number)) {
                    //numberList.innerHTML+=("<li>"+number+"</li>");
                    numberList.write(number);
                    
                }
                else {
                    //console.innerHTML+=("<p>invalid input </p>");
                    consoleWriter.write('invalid input');
                }

            }

            function doSum() {
                var result = calc.sum();
                consoleWriter.write('sum is ' + result);
            }



            function doAvg() {
                var avg = calc.avg();
                consoleWriter.write('average is ' + avg);
            }

            

            function clear() {
                //console.log('clear is called');
                consoleWriter.clear();
                numberList.clear();
                numberBox.clear();
            }

            function reset() {
                clear();
                calc.clear();
            }

            function refresh0() {
                numberList.clear();
                //calc.numbers=null;
                for(var i=0;i<calc.numbers.length;i++)
                    numberList.write(calc.numbers[i]);

            }

            function refresh1(){
                numberList.clear();
                var n=calc.getNumbers();
                for(var i=0;i<n.length;i++){
                    numberList.write(n[i]);
                    n[i]=0;
                }
            }

            function refresh3(){
                calc.refresh(numberList);
            }

            function doFindMin() {
                var min=NaN;
                calc.process(function(number,index){
                    if(index==0)
                        min=number;
                    else if (min>number)
                        min=number;
                })                                
                consoleWriter.write("min is "+min);

            }

            function refresh(){
                numberList.clear();

                calc.process(function(number){
                    numberList.write(number);
                });
            }

            var app=new Object();
            app.addToList=addToList;
            app.clear=clear;
            app.reset=reset;
            app.refresh=refresh;

            app.doSum=doSum;
            app.doAvg=doAvg;
            app.doFindMin=doFindMin;

            return app;
        })();
