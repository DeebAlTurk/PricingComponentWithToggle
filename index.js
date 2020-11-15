var basicPrices=["199.99","19.99"];
var proPrices=["249.99","24.99"];
var masterPrices=["399.99","39.99"];
var switchButton;
window.addEventListener("load", start,false);
function start() {
switchButton=document.getElementById("switcher");
switchButton.addEventListener("click",xyz,false);
}
function xyz() {
    if (document.getElementById("basicPrice").innerText===basicPrices[1])
    {
        document.getElementById("basicPrice").innerHTML=basicPrices[0];
        document.getElementById("proPrice").innerHTML=proPrices[0];
        document.getElementById("masterPrice").innerHTML=masterPrices[0];
    }
else
    {
        document.getElementById("basicPrice").innerText=basicPrices[1];
        document.getElementById("proPrice").innerText=proPrices[1];
        document.getElementById("masterPrice").innerText=masterPrices[1];
    }
}