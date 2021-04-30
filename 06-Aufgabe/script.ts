var continentAfrica: string = "Africa";
var continentSouthAmerica: string = "South America";
var continentEurope: string = "Europe";
var continentNorthAmerica: string = "North America";
var continentAsia: string = "Asia";
var continentAustralia: string = "Australia";

var africa2008: number = 1028;
var africa2018: number = 1235.5;
var southAmerica2008: number = 1132.6;
var southAmerica2018: number = 1261.5;
var europe2008: number = 4965.7;
var europe2018: number = 4209.3;
var northAmerica2008: number = 6600.4;
var northAmerica2018: number = 6035.6;
var asia2008: number = 12954.7;
var asia2018: number = 16274.1;
var australia2008: number = 1993;
var australia2018: number = 2100.5;;

var total2018: number = africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018;



function emission(continentName: string, continentValue2008: number, continentValue2018: number) { 
    document.querySelector("#titleRegion").innerHTML = continentName;
    document.querySelector("#ersterWert").innerHTML = continentValue2018.toString();
    document.querySelector("#ersterText").innerHTML = continentName;
    document.querySelector("#zweiterWert").innerHTML = Math.round(continentValue2018 * 100 / total2018) + "%";
    document.querySelector("#dritterWert").innerHTML = (continentValue2018 - continentValue2008 * 100 / continentValue2008).toFixed(2) + "%";
    document.querySelector("#vierterWert").innerHTML = Math.round(continentValue2018 - continentValue2008).toString();
    document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:' + continentValue2018 * 100 / total2018 + "%");
}


document.querySelector('.europe').addEventListener('click', function () { emission(continentEurope, europe2008, europe2018)});
document.querySelector('.northamerica').addEventListener('click', function (){emission(continentNorthAmerica, northAmerica2008, northAmerica2018)});
document.querySelector('.southamerica').addEventListener('click', function() { emission(continentSouthAmerica, southAmerica2008, southAmerica2018)});
document.querySelector('.africa').addEventListener('click', function() { emission(continentAfrica, africa2008, africa2018)});
document.querySelector('.asia').addEventListener('click', function() { emission(continentAsia, asia2008, asia2018)});
document.querySelector('.australia').addEventListener('click', function() { emission(continentAustralia, australia2008, australia2018)});



