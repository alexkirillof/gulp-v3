"use strict";

//Task_1

let c = +prompt("Введите значение температуры в Цельсиях");
let f = (9 / 5) * c + 32;
alert("Температура по Фарингейту составит: " + f + "°F");


//Task_2

let name = "Василий";
let admin = name;
alert(admin);

//Task_3

console.log (10 + 10 + "10"); //первые числа складываются,а в кавычках строка конкатинируется в конец(2010).
console.log (10 + "10" + 10); //числа сконкатинируются со строкой посередине (101010)
console.log (10 + 10 + +"10"); //последний плюс преобразует строку в число(30)
console.log (10 / -"");  // делим на отсутствие значения, получая бесконечность
console.log (10 /+"2,5"); //число, деленное на строку - недопустимая операция (NaN)
