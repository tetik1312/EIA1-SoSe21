var continentAfrica = "Africa";
var continentSouthAmerica = "South America";
var continentEurope = "Europe";
var continentNorthAmerica = "North America";
var continentAsia = "Asia";
var continentAustralia = "Australia";
var africa2008 = 1028;
var africa2018 = 1235.5;
var southAmerica2008 = 1132.6;
var southAmerica2018 = 1261.5;
var europe2008 = 4965.7;
var europe2018 = 4209.3;
var northAmerica2008 = 6600.4;
var northAmerica2018 = 6035.6;
var asia2008 = 12954.7;
var asia2018 = 16274.1;
var australia2008 = 1993;
var australia2018 = 2100.5;
;
var total2018 = africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018;
function emission(continentName, continentValue2008, continentValue2018) {
    continentValue2018 * 100 / total2018;
    document.querySelector("#titleRegion").innerHTML = continentName;
    document.querySelector("#ersterWert").innerHTML = continentValue2018.toString();
    document.querySelector("#ersterText").innerHTML = continentName;
    document.querySelector("#zweiterWert").innerHTML = Math.round(continentValue2018 * 100 / total2018) + "%";
    document.querySelector("#dritterWert").innerHTML = Math.round(continentValue2018 - continentValue2008) * 100 / continentValue2008 + "%";
    document.querySelector("#vierterWert").innerHTML = Math.round(continentValue2018 - continentValue2008).toString();
    document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:' + continentValue2018 * 100 / total2018 + "%");
}
document.querySelector('.europe').addEventListener('click', function () { emission(continentEurope, europe2008, europe2018); });
document.querySelector('.northamerica').addEventListener('click', function () { emission(continentNorthAmerica, northAmerica2008, northAmerica2018); });
document.querySelector('.southamerica').addEventListener('click', function () { emission(continentSouthAmerica, southAmerica2008, southAmerica2018); });
document.querySelector('.africa').addEventListener('click', function () { emission(continentAfrica, africa2008, africa2018); });
document.querySelector('.asia').addEventListener('click', function () { emission(continentAsia, asia2008, asia2018); });
document.querySelector('.australia').addEventListener('click', function () { emission(continentAustralia, australia2008, australia2018); });
//# sourceMappingURL=script.js.map