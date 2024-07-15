// Task 1.
 const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];
 // 1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
  characters.forEach(character => {
    console.log('Keys:');
    Object.keys(character).forEach(key => {
      console.log(key);
    });
  });
  //2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта
  characters.forEach(character => {
    console.log('Values:');
    Object.values(character).forEach(value => {
      console.log(value);
    });
  });
  
  // 3. Перебрать forEach массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
  //    Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)
    const characters = [
        { 'name': 'Barney', 'age': 36 },
        { 'name': 'Fred', 'age': 40 },
        { 'name': 'Jack', 'age': 50 }
      ];
    
      characters.forEach(character => {
        for (const [key, value] of Object.entries(character)) {
          console.log(`key = ${key}, value = ${value}`);
        }
      });
      
// 4.Перебрать forEach массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..in
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];
  
  characters.forEach(character => {
    for (const key in character) {
      console.log(`key = ${key}, value = ${character[key]}`);
    }
  });
  
  //5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
// `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. 
//Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
const qa = {
    name: 'Paul',
    age: 27,
    salary: 2000,
    getInfo: function() {
      return `Hello, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}`;
    }
  };
  console.log(qa.getInfo());
  