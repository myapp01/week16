let zodiac = prompt("Please enter message : ");
let year = parseInt(zodiac);
function myZodiac(year,ily){
    const name = {
        name1 : `Rat`,
        name2 : `Oxen`,
        name3 : `Tiger`,
        name4 : `Rabbit`,
        name5 : `Dragon`, 
        name6 : `Snake`,
        name7 : `Horse`,
        name8 : `Sheep`,
        name9 : `Monkey`,
        name10 : `Rooster`,
        name11 : `Dog`,
        name12 : `Pig`
    }
    switch (year){
        case 2020: case 2018: case 1996: case 1984: case 1972:
            alert(`${year} + is ${name.name1} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name1} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name1} ZODIAC SIGNS ${ily}`);
            break;

        case 2021: case 2019: case 1997: case 1985: case 1975:
            alert(`${year} + is ${name.name2} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name2} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name2} ZODIAC SIGNS ${ily}`);
            break;

        case 1974: case 1986: case 1998: case 2010: case 2022:
            alert(`${year} + is ${name.name3} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name3} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name3} ZODIAC SIGNS ${ily}`);
            break;

        case 1975: case 1987: case 1999: case 2011: case 2023:
            alert(`${year} + is ${name.name4} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name4} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name4} ZODIAC SIGNS ${ily}`);
            break;

        case 1976: case 1988: case 2000: case 2012: case 2024:
            alert(`${year} + is ${name.name5} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name5} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name5} ZODIAC SIGNS ${ily}`);
            break;

        case 1977: case 1989: case 2001: case 2013: case 2025:
            alert(`${year} + is ${name.name6} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name6} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name6} ZODIAC SIGNS ${ily}`);
            break;

        case 1978: case 1990: case 2002: case 2014: case 2026:
            alert(`${year} + is ${name.name7} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name7} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name7} ZODIAC SIGNS ${ily}`);
            break;

        case 1979: case 1991: case 2003: case 2015: case 2027:
            alert(`${year} + is ${name.name8} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name8} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name8} ZODIAC SIGNS ${ily}`);
            break;

        case 1980: case 1992: case 2004: case 2016: case 2028:
            alert(`${year} + is ${name.name9} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name9} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name9} ZODIAC SIGNS ${ily}`);
            break;

        case 1981: case 1993: case 2005: case 2017: case 2029:
            alert(`${year} + is ${name.name10} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name10} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name10} ZODIAC SIGNS ${ily}`);
            break;

        case 1982: case 1994: case 2006: case 2018: case 2030:
            alert(`${year} + is ${name.name11} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name11} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name11} ZODIAC SIGNS ${ily}`);
            break;

        case 1983: case 1995: case 2007: case 2019: case 2031:
            alert(`${year} + is ${name.name12} ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ${name.name12} ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ${name.name12} ZODIAC SIGNS ${ily}`);
            break;
            
        default:
            alert(`${year} + is ERROR ZODIAC SIGNS ${ily}`);
            console.log(`${year} + is ERROR ZODIAC SIGNS ${ily}`);
            document.getElementById("hContent").innerHTML = (`${year} + is ERROR ZODIAC SIGNS ${ily}`);
    }
}

myZodiac(year,"I love You");

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