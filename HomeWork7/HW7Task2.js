// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
function transformSentence(sentence) {
    const lowerCaseSentence = sentence.toLowerCase(); //к нижнему регистру для неучета регистра
    
    const letterCount = {};

    for (const char of lowerCaseSentence) {
        if (char >= 'a' && char <= 'z') { // Учитывает только буквы
            if (!letterCount[char]) {
                letterCount[char] = 0;
            }
            letterCount[char]++;
        }
    }
    let transformedSentence = ''; //новая строка, заменяет буквы на их количество

    for (const char of sentence) {
        const lowerCaseChar = char.toLowerCase();
        if (lowerCaseChar >= 'a' && lowerCaseChar <= 'z') {
            transformedSentence += letterCount[lowerCaseChar];
        } else {
            transformedSentence += char;
        }
    }
    return transformedSentence;
}
const sentence = "I am the best AQA ever!";
console.log(transformSentence(sentence));


// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
//   const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

function calculateTotalAndAverage(prices) {
  
    const total = prices.reduce((sum, price) => sum + price, 0);  // Сумма товаров
    const average = total / prices.length; // Средняя цена товаров
    
    // Выводим результат в консоль
    console.log(`Итого: ${total} $, средняя цена товара ${average.toFixed(1)} $`);
}

// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
function countVowels(word) {
    const vowels = 'aeiouyAEIOUY';
    return Array.from(word).filter(char => vowels.includes(char)).length;
}
function sortWordsByVowels(words) {
    return words.sort((a, b) => countVowels(a) - countVowels(b));    // Сортировка по количеству гласных
}

const words = ["avocado", "tomato", "orange", "grape", "onion", "strawberry"];
const sortedWords = sortWordsByVowels(words);
console.log(sortedWords); // ["grape", "tomato", "avocado", "orange", "onion", "strawberry"]

