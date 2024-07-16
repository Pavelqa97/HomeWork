// 1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
//     Функция должна исполнить колбэк строго через переданное количество миллисекунд
//     Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
delay(() => console.log('hello'), 2000);

// 2. Создайте два промиса:
//   - promise1 должен резолвать "After 3 seconds" через 3 секунды
//   - promise2 должен резолвать "After 5 seconds" через 5 секунд
//   Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
//     1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
//     2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке. 
//         Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
//         Вывести в консоль результат обоих промисов по очереди
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("After 3 seconds");
    }, 3000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("After 5 seconds");
    }, 5000);
});


Promise.all([promise1, promise2])
    .then((results) => {
        console.log("Promise.all results:");
        console.log(results[0]);
        console.log(results[1]);
    })
    .catch((error) => {
        console.error("Promise.all error:", error);
    });

Promise.allSettled([promise1, promise2])
    .then((results) => {
        console.log("Promise.allSettled results:");
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} resolved with: ${result.value}`);
            } else {
                console.log(`Promise ${index + 1} rejected with: ${result.reason}`);
            }
        });
    });

    async function handlePromises() {
        try {
            const [promise1Result, promise2Result] = await Promise.all([promise1, promise2]);
            console.log("Promise.all results:");
            console.log(promise1Result);
            console.log(promise2Result);
        } catch (error) {
            console.error("Promise.all error:", error);
        }
    
        const allSettledResults = await Promise.allSettled([promise1, promise2]);
        console.log("Promise.allSettled results:");
        allSettledResults.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} resolved with: ${result.value}`);
            } else {
                console.log(`Promise ${index + 1} rejected with: ${result.reason}`);
            }
        });
    }
    
    // Вызов асинхронной функции
    handlePromises();

// 3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
//   Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
//   Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
//   Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
//   и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch
// Функция, возвращающая Promise, резолвающийся в сумму двух чисел
function addNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('Both arguments must be numbers'));
        } else {
            resolve(a + b);
        }
    });
}

//Валидные значения
addNumbers(5, 10)
    .then(result => {
        console.log(`Result: ${result}`); // Ожидается: Result: 15
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
    });

// Невалидные значения
addNumbers(5, '10')
    .then(result => {
        console.log(`Result: ${result}`);
    })
    .catch(error => {
        console.error(`Error: ${error.message}`); // Ожидается: Error: Both arguments must be numbers
    });

async function testAddNumbers() {
    try {
        const result1 = await addNumbers(3, 4);
        console.log(`Result: ${result1}`); // Ожидается: Result: 7

        const result2 = await addNumbers(3, 'four');
        console.log(`Result: ${result2}`);
    } catch (error) {
        console.error(`Error: ${error.message}`); // Ожидается: Error: Both arguments must be numbers
    }
}

// Вызов асинхронной функции
testAddNumbers();

// 4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
//     Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)

const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    for (const object of data) {
      if (object.userId === 1) {
        console.log(object);
      }
    }
  })
  .catch(error => console.log(error));

 //2

async function getResponse (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    for (const object of data) {
      if (object.userId === 1) {
        console.log(object);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getResponse(url);