let zodiac = prompt("Please enter message : ");
let year = parseInt(zodiac);
switch (year){
    case 2020: case 2018: case 1996: case 1984: case 1972:
        alert(`${year} + is Rat ZODIAC SIGNS`);
        console.log(`${year} + is Rat ZODIAC SIGNS`);
        document.getElementById("hContent").innerHTML = (`${year} + is Rat ZODIAC SIGNS`);
        break;
    case 2021: case 2019: case 1997: case 1985: case 1975:
        alert(`${year} + is Oxen ZODIAC SIGNS`);
        console.log(`${year} + is Oxen ZODIAC SIGNS`);
        document.getElementById("hContent").innerHTML = (`${year} + is Oxen ZODIAC SIGNS`);
        break;
    default:
        alert(`${year} + is ERROR ZODIAC SIGNS`);
        console.log(`${year} + is ERROR ZODIAC SIGNS`);
        document.getElementById("hContent").innerHTML = (`${year} + is ERROR ZODIAC SIGNS`);
}