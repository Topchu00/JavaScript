// Объекты в js - это тип данных, умеющий хранить большие коллекции разных типов данных, как пара из "<Ключ: значение>"

// Способы создания объектов 
// 1. Создание с помощью конструктора new Object()1
// const obj1 = new Object()

// 2. Создание с помощью {}

// const obj = {}

// Свойство объекта это => Пара <Ключ:значение>

// const user = {
//     name: "Topchu",
//     age: 17,
//     gender: "male"
// }

// 1. способ получения свойства объекта
// console.log(user.name);

// 2. способ получения свойства объекта
// console.log(user['age']);


// let user1 = "Alice"

// let user2 = user1;

// user1 = 'Rustam'

// console.log(user1);
// console.log(user2);

// let obj1 = {
//     name:"Topchu"
// } // Хранит ссылку на объект

// let obj2 = obj1; // obj2 хранит ссылку на тот же объект

// obj1.name = "Aisha"

// console.log(obj1);
// console.log(obj2);

// const obj = {
//     name: '',
    // getAnimal: (animal) => {
    //     console.log(animal);
        
    // }
//     getAnimal () {
//         return "Monkey"
//     }
// }

// obj.name = "Aisha"

// console.log(obj.name);

// console.log(obj.getAnimal());


// const obj = {
//     key: "value",
//     "key and value": {
//         name: "name"
//     },
// }

// console.log(obj["key and value"]);

// Перебор объектов

// const obj = {
//     name: "Topchu",
//     surname: "Orozbekov",
//     age: 17,
//     sayHello: () => {
//         alert("Hello")
//     }
// }

// // for in 

// for (let key in obj) {
//     console.log(obj[key]);
// }


let students = {
    Ivan: 5,
    Maria: 4,
    Sergey: 3,
    Anna: 5,
    Oleg: 2,
}

students = function getGradeStatus(grade) {
    if(grade === 5) {
        return "Отлично"
    }else if (grade === 4) {
        return "Хорошо "
    }else if (grade === 3) {
        return "Удовлетворительно"
    }else if (grade === 2 && grade === 1) {
        return "Неудовлетворительно"
    }else {
        return "Ошибка"
    }
}

for (let key in students) {
    console.log(key[students]);
    
}

