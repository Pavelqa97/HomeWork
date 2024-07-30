// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 

interface ItEmployee {
    name: string;
    surname: string;
    salary: number;
    address?: IAddress;
    projectNames: string[];

        function getEmployeeInfo(employee: IEmployee | ItEmployee): void {
            if (isItEmployee(employee)) {
                console.log(`IT Employee Info:
                Name: ${employee.name}
                Surname: ${employee.surname}
                Salary: ${employee.salary}
                Grade: ${employee.grade}
                Occupation: ${employee.occupation}
                Project Names: ${employee.projectNames.join(', ')}
                Address: ${employee.address ? `${employee.address.country}, ${employee.address.street}, ${employee.address.house}, ${employee.address.flat}` : 'No address provided'}`);
            } else {
                console.log(`Employee Info:
                Name: ${employee.name}
                Surname: ${employee.surname}
                Salary: ${employee.salary}
                Address: ${employee.address ? `${employee.address.country}, ${employee.address.street}, ${employee.address.house}, ${employee.address.flat}` : 'No address provided'}`);
            }
        }
        
    }
// ; 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
// ;   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
// ;   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве. 
type CountResult = 
{   string: number;
    number: number;
    boolean: number;
};
function countValueTypes(input: object | object[]): CountResult {
    const result: CountResult = { string: 0, number: 0, boolean: 0 };

    function countFromObject(obj: object) {
        for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (typeof value === 'string') {
                    result.string++;
        } else if (typeof value === 'number') {
                    result.number++;
        } else if (typeof value === 'boolean') {
                    result.boolean++;
                }
    }
    }
    }

    if (Array.isArray(input)) {
        for (const item of input) {
            countFromObject(item);
        }
    } else {
        countFromObject(input);
    }return result;
}

// ; 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
// ;     который будет использоваться для проверки каждого числа на соответствие требованиям. 
// ;     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
// ;     Пример функции:
// ;     const numbers = [1, -5, 2, 3, 4, 133];
// ;     filter(numbers, (n) => n > 3); // [4, 133]
// ;     filter(numbers, (n) => n % 2 == 0); // [2, 4]
// ;     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.