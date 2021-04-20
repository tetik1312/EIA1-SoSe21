var Africa2008: number = 1028;
var Africa2018: number = 1235.5;
var SouthAmerica2008: number = 1132.6;
var SouthAmerica2018: number = 1261.5;
var Europe2008: number = 4965.7;
var Europe2018: number = 4209.3;
var NorthAmerica2008: number = 6600.4;
var NorthAmerica2018: number = 6035.6;
var Asia2008: number = 12954.7;
var Asia2018: number = 16274.1;
var Australia2008: number = 1993;
var Australia2018: number = 2100.5;;

var total2018: number = Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018;

console.log("Die Emission von Afrika ist: "+Africa2018+" kg CO2 ");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " +Africa2018*100/total2018+"%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + (Africa2018-Africa2008)*100/Africa2008+ "% verändert");
console.log("2018 im Vergleich zu 2008 sind das"+(Africa2018-Africa2008) +"kg CO2");

console.log("Die Emission von Südamerika ist: "+SouthAmerica2018+" kg CO2 ");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " +SouthAmerica2018*100/total2018+"%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (SouthAmerica2018-SouthAmerica2008)*100/SouthAmerica2008+ "% verändert");
console.log("2018 im Vergleich zu 2008 sind das"+(SouthAmerica2018-SouthAmerica2008) +"kg CO2");

console.log("Die Emission von Europa ist: "+Europe2018+" kg CO2 ");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " +Europe2018*100/total2018+"%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + (Europe2018-Europe2008)*100/Europe2008+ "% verändert");
console.log("2018 im Vergleich zu 2008 sind das"+(Europe2018-Europe2008) +"kg CO2");

console.log("Die Emission von Nordamerika ist: "+NorthAmerica2018+" kg CO2 ");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " +NorthAmerica2018*100/total2018+"%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (NorthAmerica2018-NorthAmerica2008)*100/NorthAmerica2008+ "% verändert");
console.log("2018 im Vergleich zu 2008 sind das"+(NorthAmerica2018-NorthAmerica2008) +"kg CO2");

console.log("Die Emission von Asien ist: "+Asia2018+" kg CO2 ");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " +Asia2018*100/total2018+"%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + (Asia2018-Africa2008)*100/Asia2008+ "% verändert");
console.log("2018 im Vergleich zu 2008 sind das"+(Asia2018-Asia2008) +"kg CO2");

console.log("Die Emission von Australien ist: "+Australia2018+" kg CO2 ");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " +Australia2018*100/total2018+"%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + (Australia2018-Australia2008)*100/Australia2008+ "% verändert");
console.log("2018 im Vergleich zu 2008 sind das"+(Australia2018-Australia2008) +"kg CO2");