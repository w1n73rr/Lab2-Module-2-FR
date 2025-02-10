//Задание 1, вариант 5
//одномерные массивы
let data: number[] = [-64,-22,-3,-8,-9,-10,-55];
console.log(data);

const findMaxNegative = (array:number[]):number=>{
    let max:number =data[0];
    for(let i = 1;i<array.length;i++){
        if(data[i]>max) max = data[i];
    }
    return max;
}

console.log("Максимальное значение среди отрицательных чисел массива целых чисел = "+findMaxNegative(data));
//двумерные массивы
let datas: boolean[][]=[[false,true,false],[true,false,true],[false,true,false]];
console.log(datas);

const newMatrixOfWholeNumbers = (array:boolean[][]):number[][]=>{
    const rows = array.length;
    const columns = array[0].length;
    let array1: number[][] = new Array(rows).fill(null).map(() => new Array(columns).fill(0));
    for(let i =0;i<rows;i++){
        for(let j = 0;j<columns;j++){
            if(array[i][j]===true)array1[i][j]=1;
            else array1[i][j]=0;
        }
    }
    return array1;
}

console.log(newMatrixOfWholeNumbers(datas))

//Задание 2
const cortege:[number,string,string]=[52,"Привет","Hi"];

const showCortege = (tuple:[number,string,string])=>{
    return tuple[2]+ " " +tuple[1];
}

console.log("Результат выполнения задания 2: "+showCortege(cortege));

//Задание 3
enum Aminoxylates{
    ALANINE = "Аланин",
    ASPARAGINE = "Аспарагин",
    ASPIRIN = "Аспирин",
    GLUTAMINE = "Глутамин",
}

console.log(Aminoxylates.ASPIRIN);

//Задание 4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

const printInfo=<T extends Pet>(pet:T)=>{
    console.log("Возраст: "+pet.age);
    console.log("Имя: "+pet.name);
    console.log("Животное говорит: "+pet.speak());
}

const pet1: Pet = new Cat();
const pet2:Pet = new Dog();

printInfo(pet1);
printInfo(pet2);

//Задание 5
interface Information{
    id:number;
    enum1: Aminoxylates;
}

const someObject:Information={
    id:52,
    enum1:Aminoxylates.ASPIRIN
}

const jsonObject = JSON.stringify(someObject);

console.log(jsonObject);