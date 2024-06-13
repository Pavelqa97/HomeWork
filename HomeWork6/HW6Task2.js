//1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
  //и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
  //Пиццы конкурента:
 //const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  
function getUniquePizzas(myPizzas, rivalPizzas) {
    const uniquePizzas = myPizzas.filter(pizza => !rivalPizzas.includes(pizza));
    return uniquePizzas.length > 0 ? uniquePizzas : null;
}
const rivalPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Margherita', 'Peperoni', 'Diavola', '4 seasons', 'hawai'];

console.log(getUniquePizzas(myPizzas, rivalPizzas)); 



 //2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
  //Если таких слов несколько - выводит их все.
function findLongestWords(sentence) {
    
    const words = sentence.split(' ');
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    const longestWords = words.filter(word => word.length === maxLength);
    console.log("Слово(а) с наибольшим количеством букв:");
    longestWords.forEach(word => console.log(word));
}
findLongestWords("I am a super engineer");


//3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.
function removeDuplicatesNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    return [...uniqueNumbers];
}

const numbers1 = [1, 200, 300, 2, 40, 40, 3, 5, 60, 60];
const numbers2 = [10, 2000, 20000, 30, 40, 30, 50000];

console.log(removeDuplicatesNumbers(numbers1));
console.log(removeDuplicatesNumbers(numbers2)); 
 
//4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
function isPalindrome(word) {
    // Нижний регистр и удаление всех  неалфавитных символов
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Получить обратную версию слова (split-строка в массив , reverse - меняю порядок элементов массива.
    const reversedWord = cleanedWord.split('').reverse().join('');
    // Сравнение слова
    return cleanedWord === reversedWord;
}

console.log(isPalindrome('радар')); 
console.log(isPalindrome('казак')); 
console.log(isPalindrome('шалаш')); 
console.log(isPalindrome('ertyui')); 
console.log(isPalindrome('asdfg'));