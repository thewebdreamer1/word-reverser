var input = document.getElementById("theinput");
var output = document.getElementById("theoutput");

function reverseInput () {

    var inputData = input.value;
    var string = inputData.toString().split("");
    var reverse = string.reverse();
    var join = reverse.join("");

    output.value = join;           

}