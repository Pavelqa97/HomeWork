// Task 1

// 1. Создайте класс Animal
// 2. В конструкторе класс должен принимать следующие параметры:     
//   - type
//   - color
//   - weight
//   - height
//   - place of origin
// 3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
// 4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
// 5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
//   - Красный
//   - Черный
//   - Белый
//   - Синий
// Если не является - кидаем ошибку через throw new Error('текст ошибки')


class Animal {
    constructor(type, color, weight, height, place_of_origin){
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.place_of_origin = place_of_origin;

    }

getInfo(){
    return `Type: ${this.type}
    color: ${this.color}
    weight: ${this.weight}
    height: ${this.height}
    place_of_origin: ${this.place_of_origin}`;
}
get color() {
    return this._color;
}

set color(newColor) {
    const validColors = ['Красный', 'Черный', 'Белый', 'Синий'];
    if (!validColors.includes(newColor)) {
        throw new Error('Неверный цвет');
    }
    this._color = newColor;
}
}


const animal = new Animal ('elephant', 'black', '5000 kg', '250 cm', 'SouthAfrica');
console.log(animal.getInfo());
console.log(animal.color);




// 6. Создайте класс Snake, который будет наследовать класс Animal
// 7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
// 8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
// 9. В классе Snake создать метод checkPoisonous(), который возвращает true/false
// 10. Сделайте поле isPoisonous приватным в классе Snake

class Snake extends Animal {
    constructor(type, color, weight, height, place_of_origin,   isPoisonous) {
        super(type, color, weight, height, place_of_origin);
        this._isPoisonous = isPoisonous;
    }
    checkPoisonous() {
return this._isPoisonous;
    }
}

const snake= new Snake('black_mamba', 'black', '3kg', '130cm', 'Africa', true);

console.log(snake.getInfo());
console.log(sake.checkPoisonous());

try {
    snake.color = 'Зеленый'; // Это должно вызвать ошибку
} catch (error) {
    console.error(error.message);
}

snake.color = 'Белый';
console.log(snake.color);