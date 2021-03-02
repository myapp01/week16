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

// Function in javascript(ES6)
// 1. Declaration Function
// let data1 = prompt("Enter any value : ");
// let data2 = prompt("Enter the value : ");
// let cdata1 = parseInt(data1);
// let cdata2 = parseInt(data2);
// function myZodiac(a,b,ily)//formal parameter
// {
//     let z = a + b;
//     console.log(`${z} =  ${a} + ${b} is ${ily}`);
//     document.getElementById("hContent").innerHTML = (`${z} = ${a} + ${b} is ${ily}`);
// }

// myZodiac(cdata1,cdata2,"I love you");//argument parameter(Active parameter)