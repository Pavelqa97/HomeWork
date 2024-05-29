//Task2*. Решить квадратные уравнения. Переменные называть по правилам.
//Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
//1.  x2 - 6x + 9 = 0. - один корень

const a = 1;
const b = (-6);
const c = 9;

const y = b / 2; // -3
console.log(y);

const D = (y** 2) - (a * c); // 0
console.log(D);

const x = (D === 0) ? (-y) / a : false; // 3
console.log(x);

console.log('Ответ к уравнению 1: x = ' + x);
//2.  x2 - 4x - 5 = 0. - два корня
const a2 = 1;
const b2 = (-4);
const c2 = (-5);

const y2 = b2 / 2; // -2
console.log(y2);

const D2 = (y2** 2) - (a2 * c2); // 9
console.log(D2);

const x2 = D2 > 0 ? (-y2) + Math.sqrt(D2) : false;
const x3 = D2 > 0 ? (-y2) - Math.sqrt(D2) : false;
console.log(x2, x3);

console.log('Ответ к уравнению 2: x2 = ' + x2 + ', ' + 'x3 = ' + x3);
