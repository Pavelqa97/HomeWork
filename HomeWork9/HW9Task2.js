// Task 2.
// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
// 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
//     class Worker
//       firstName
//       lastName
//       phone
//       getFullName()


class Animal {
    constructor(type, color, weight, height, place_of_origin) {
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.place_of_origin = place_of_origin;
    }

    getInfo() {
        return `type: ${this.type}
    color: ${this.color}
    weight: ${this.weight}
    height: ${this.height}
    place_of_origin: ${this.place_of_origin}`;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        if (newColor !== 'Red' && newColor !== 'Blue' && newColor !== 'White' && newColor !== 'Black')
            throw new Error('Wrong color');
        this._color = newColor;
    }
}

class Bird extends Animal {
    constructor(type, color, weight, height, place_of_origin, isFlying) {
        super(type, color, weight, height, place_of_origin);
        this._isFlying = isFlying;
    }

    get isFlying() {
        return this._isFlying;
    }

    set isFlying(value) {
        this._isFlying = value;
    }
}

class CatLike extends Animal {
    constructor(type, color, weight, height, place_of_origin, isSafeToPet) {
        super(type, color, weight, height, place_of_origin);
        this.isSafeToPet = isSafeToPet;
    }
}

class Snake extends Animal {
    constructor(type, color, weight, height, place_of_origin, isPoisonous) {
        super(type, color, weight, height, place_of_origin);
        this._isPoisonous = isPoisonous;
    }

    checkPoisonous() {
        return this._isPoisonous;
    }
}

class Worker {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// 4. Создайте класс Zoo, реализующий следующий интерфейс:
//     class Zoo
//       address
//       title
//       ticket price
//       workers: []
//       animals: [],
// 5. Добавьте геттеры и сеттеры к полям address, title, ticket price
// 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
//     На вход метод должен принимать объект класса Worker. 
//     Если объект не является инстансом класса Worker - выкинуть ошибку
// 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
//     На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
//     Если объект не является инстансом класса Animal - выкинуть ошибку
//     ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)


class Zoo {
    constructor(address, title, ticketPrice) {
        this._address = address;
        this._title = title;
        this._ticketPrice = ticketPrice;
        this.workers = [];
        this.animals = [];
    }

    get address() {
        return this._address;
    }

    set address(newAddress) {
        this._address = newAddress;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get ticketPrice() {
        return this._ticketPrice;
    }

    set ticketPrice(newTicketPrice) {
        this._ticketPrice = newTicketPrice;
    }

    addWorker(worker) {
        if (worker instanceof Worker) {
            this.workers.push(worker);
        } else {
            throw new Error('Only instances of Worker can be added.');
        }
    }

    removeWorker(firstName, lastName) {
        this.workers = this.workers.filter(worker => !(worker.firstName === firstName && worker.lastName === lastName));
    }

    addAnimal(animal) {
        if (animal instanceof Snake) {
            throw new Error('There will be no snakes, mister Potter!');
        }
        if (animal instanceof Animal) {
            this.animals.push(animal);
        } else {
            throw new Error('Only instances of Animal can be added.');
        }
    }

    removeAnimal(type, color) {
        this.animals = this.animals.filter(animal => !(animal.type === type && animal.color === color));
    }
}
