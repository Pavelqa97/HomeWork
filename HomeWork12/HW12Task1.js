// 1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).
// 2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
//   - Интерфейс Person должен содержать:
//       Стринговые поля: name, surname, experienceYears
//       Метод, возвращающий строку: getDetails().

//   - Абстрактный класс Employee должен:
//       Реализовывать интерфейс Person.
//       Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
  
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)
// 1. Создание дженерик функции getFirstElement
function getFirstElement<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return arr[0];
}

// 2. Создание интерфейса Person, абстрактного класса Employee, и конкретных классов Manager и Developer

interface Person {
    name: string;
    surname: string;
    experienceYears: number;
    getDetails(): string;
}

abstract class Employee implements Person {
    name: string;
    surname: string;
    experienceYears: number;
    protected salary: number = 0;

    constructor(name: string, surname: string, experienceYears: number) {
        this.name = name;
        this.surname = surname;
        this.experienceYears = experienceYears;
        this.calculateSalary();
    }
    protected abstract calculateSalary(): void;
    abstract getDetails(): string;
}

class Manager extends Employee {
    private prefered: 'scrum' | 'kanban';
    constructor(name: string, surname: string, experienceYears: number, prefered: 'scrum' | 'kanban') {
        super(name, surname, experienceYears);
        this.prefered = prefered;
    }
    protected calculateSalary(): void {
        this.salary = this.experienceYears * 500;
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am a manager with ${this.experienceYears} years of experience and a salary of ${this.salary}$. My preferred methodology is ${this.prefered}.`;
    }
}
class Developer extends Employee {
        private programmingLanguage: 'js' | 'ts' | 'java' | 'python';

    constructor(name: string, surname: string, experienceYears: number, programmingLanguage: 'js' | 'ts' | 'java' | 'python') {
        super(name, surname, experienceYears);
        this.programmingLanguage = programmingLanguage;
    }

         protected calculateSalary(): void {
        this.salary = this.experienceYears * 1000;
    
          getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am a software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and a salary of ${this.salary}$.`;
    }
}