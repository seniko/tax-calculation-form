/**
 * Created by Пользователь on 15.10.2016.
 */
var priceField = document.getElementById("price-field");

priceField.onkeyup = calcHandler;

function calcHandler() {

    var resVal = priceField.value;

    if (resVal > 150) {

        var duty = (resVal - 150) * 10 / 100;
        var nds = ((resVal - 150) + duty) * 20 / 100;
        var sumTax = duty + nds;
        var sumAll = +resVal + sumTax;
        document.getElementById("tax-field").innerHTML = sumTax.toFixed(2);
        document.getElementById("sum-field").innerHTML = sumAll.toFixed(2);
    } else {
        document.getElementById("tax-field").innerHTML = "0.00";
        document.getElementById("sum-field").innerHTML = (+resVal).toFixed(2);
    }
}