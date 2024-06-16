 //1.Написать скрипт, переводящий количество байт в нужные единицы
  //bytes => kB Mb Gb Tb
  //16 565 846 bytes (16,6 Mb)

  //1 Kb = 1024 byte
  //1 Mb = 1024 Kb
  //1 Gb = 1024 Mb
  //1 Tb = 1024 Gb

  // Пример: ~ 1000
  //4 548 = 4,5 Kb (Real 4,4 Kb)
  //454 548 = 454,5 Kb
  //1 454 548 = 1,5 Mb

  //Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

  function formatBytes(bytes) {
    if (typeof bytes !== 'number' || isNaN(bytes) || bytes < 0) {
        return 'Invalid input';
    }

    const KILOBYTE = 1024;
    const MEGABYTE = KILOBYTE * 1024;
    const GIGABYTE = MEGABYTE * 1024;
    const TERABYTE = GIGABYTE * 1024;

    if (bytes >= TERABYTE) {
        return (bytes / TERABYTE).toFixed(1) + ' Tb';
    } else if (bytes >= GIGABYTE) {
        return (bytes / GIGABYTE).toFixed(1) + ' Gb';
    } else if (bytes >= MEGABYTE) {
        return (bytes / MEGABYTE).toFixed(1) + ' Mb';
    } else if (bytes >= KILOBYTE) {
        return (bytes / KILOBYTE).toFixed(1) + ' Kb';
    } else {
        return bytes + ' bytes';
    }
}


//2. Сделать из "*" в консоли равнобедренный треугольник и ромб
// Треугольник:
const t = 10;
for (let i = 1; i <= t; i++) {
    let spaces = " ".repeat(t - i); 
    let stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars);
    } 
//Ромб:
const a = 5;
for (let i = 1; i <= a; i++) {
    let spaces = " ".repeat(a - i);
    let stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars);
    }
    for (let i = a - 1; i > 0; i--) {
      let spaces = " ".repeat(a - i);
      let stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars);
    }
//3.  Вам нужно вывести в консоль числа от 1 до 100.
  //Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
  //Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
  //Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
  //Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " число  делится без остатка на 3 и на 5");
    } else if (i % 3 === 0) {
        console.log(i + "число  делится на 3 без остатка");
    } else if (i % 5 === 0) {
        console.log(i + " число делится на 5 без остатка");
    } else {
        console.log(i);
    }
}

//4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

function toCamelCase(sentence) {
    let words = sentence.split(' ');
    
    // Преобразуем первое слово в нижний регистр
    let camelCaseSentence = words[0].toLowerCase();
    
    // Обрабатываем остальные слова
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let camelCaseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        camelCaseSentence += camelCaseWord;
    }
    
    return camelCaseSentence;
}

// Примеры использования
console.log(toCamelCase("I am super engineer")); // "iAmSuperEngineer"
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("JavaScript is fun")); // "javaScriptIsFun"
