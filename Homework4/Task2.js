//1.Реализовать Task 1 через switch

const minAge = 18;
const maxAge = 60;
let age;

function checkAge(age) {
    switch (true) {
        case age < minAge:
            console.log("You don't have access cause your age is " + age + ". It's less than " + minAge);
            break;
        case age >= minAge && age < maxAge:
            console.log("Welcome!");
            break;
        case age >= maxAge:
            console.log("Keep calm and look Culture channel");
            break;
        default:
            console.log("Technical work");
    }
}

let ages = [10, 17, 18, 19, 59, 60, 61];

ages.forEach(checkAge);


//2. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
  //И если он не number - кидалась ошибка в консоль.
  //Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"

  const minAge_pb = 18;
const  maxAge_pb = 60;
let age_pb = "aaa";

if (typeof age_pb != 'number') {
    console.log('Valid information')
} else if (age_pb < minAge_pb) {
    console.log("You don't have access cause your age is " + age_pb + ". It's less than ");
} else if (age >= minAge_pb && age < maxAge_pb) {
    console.log('Welcome!');
} else if (age_pb > maxAge_pb) {
    console.log('Keep culm and look culture channel');
} else {
    console.log('Technical work');
}

//3.Преобразовать Task 2 - 2 таким образом, чтобы значение НАПРИМЕР '2' 
//(т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  //преобразовываясь в number

  const minAge_pb97 = 18;
  const  maxAge_pb97 = 60;
  let age_pb97 = '2';
  if (typeof age_pb97  === 'string' && /^\d+$/.test(age_pb97)) {
    age_pb97 = Number(age_pb97);
  }
    if (typeof age_pb97 !== 'number' || isNaN(age_pb97)) {
        console.log('Valid information');
    } else if (age_pb97 < minAge_pb97) {
        console.log("You don't have access cause your age is " + age_pb97 + ". It's less than " + minAge_pb97);
    } else if (age_pb97 >= minAge_pb97 && age_pb < maxAge_pb97) {
        console.log('Welcome!');
    } else if (age_pb97 >= maxAge_pb97) {
        console.log('Keep calm and look Culture channel');
    } else {
        console.log('Technical work');
    }