
var io = (function () {

    function Input(id) {
        var el = document.getElementById(id);
        this.readNumber = function () {
            return parseFloat(el.value);
        };
        this.read = function () {
            return el.value;
        };
        this.clear = function () {
            el.value = '';
        };
    }

    function Writer(id, tag) {
        tag = tag || 'p'; //default tag to p
        var start = '<' + tag + '>';
        var end = '</' + tag + '>';
        var el = document.getElementById(id);

        this.write = function (msg) {
            var content = start + msg + end;
            el.innerHTML += content;
        };

        this.clear = function () {
            el.innerHTML = '';
        };

    }

    return {
        Writer:Writer,
        Input:Input
    };

})();

