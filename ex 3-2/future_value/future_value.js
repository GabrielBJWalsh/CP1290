var $ = function (id) {
    return document.getElementById(id).value;
}

function calculate(){
    var rate = parseFloat(document.getElementById("rate").value);
    var investment = parseFloat(document.getElementById("investment").value);
    var years = parseFloat(document.getElementById("years").value);
    var future_value = investment;


    rate = rate*.01;


    for (i=0;i < years; i++) {
        future_value = future_value + investment * rate;
    }
    alert(future_value);
    document.getElementById("future_value").value = future_value;


}