//Задание 1, вариант 5
//одномерные массивы
let data = [-64, -22, -3, -8, -9, -10, -55];
console.log(data);
const findMaxNegative = (array) => {
    let max = data[0];
    for (let i = 1; i < array.length; i++) {
        if (data[i] > max)
            max = data[i];
    }
    return max;
};
console.log("Максимальное значение среди отрицательных чисел массива целых чисел = " + findMaxNegative(data));
//двумерные массивы
let datas = [[false, true, false], [true, false, true], [false, true, false]];
console.log(datas);
const newMatrixOfWholeNumbers = (array) => {
    const rows = array.length;
    const columns = array[0].length;
    let array1 = new Array(rows).fill(null).map(() => new Array(columns).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (array[i][j] === true)
                array1[i][j] = 1;
            else
                array1[i][j] = 0;
        }
    }
    return array1;
};
console.log(newMatrixOfWholeNumbers(datas));
//Задание 2
const cortege = [52, "Привет", "Hi"];
const showCortege = (tuple) => {
    return tuple[2] + " " + tuple[1];
};
console.log("Результат выполнения задания 2: " + showCortege(cortege));
//Задание 3
var Aminoxylates;
(function (Aminoxylates) {
    Aminoxylates["ALANINE"] = "\u0410\u043B\u0430\u043D\u0438\u043D";
    Aminoxylates["ASPARAGINE"] = "\u0410\u0441\u043F\u0430\u0440\u0430\u0433\u0438\u043D";
    Aminoxylates["ASPIRIN"] = "\u0410\u0441\u043F\u0438\u0440\u0438\u043D";
    Aminoxylates["GLUTAMINE"] = "\u0413\u043B\u0443\u0442\u0430\u043C\u0438\u043D";
})(Aminoxylates || (Aminoxylates = {}));
console.log(Aminoxylates.ASPIRIN);
//Задание 4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
const printInfo = (pet) => {
    console.log("Возраст: " + pet.age);
    console.log("Имя: " + pet.name);
    console.log("Животное говорит: " + pet.speak());
};
const pet1 = new Cat();
const pet2 = new Dog();
printInfo(pet1);
printInfo(pet2);
const someObject = {
    id: 52,
    enum1: Aminoxylates.ASPIRIN
};
const jsonObject = JSON.stringify(someObject);
console.log(jsonObject);
