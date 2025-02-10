declare let data: number[];
declare const findMaxNegative: (array: number[]) => number;
declare let datas: boolean[][];
declare const newMatrixOfWholeNumbers: (array: boolean[][]) => number[][];
declare const cortege: [number, string, string];
declare const showCortege: (tuple: [number, string, string]) => string;
declare enum Aminoxylates {
    ALANINE = "\u0410\u043B\u0430\u043D\u0438\u043D",
    ASPARAGINE = "\u0410\u0441\u043F\u0430\u0440\u0430\u0433\u0438\u043D",
    ASPIRIN = "\u0410\u0441\u043F\u0438\u0440\u0438\u043D",
    GLUTAMINE = "\u0413\u043B\u0443\u0442\u0430\u043C\u0438\u043D"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare const printInfo: <T extends Pet>(pet: T) => void;
declare const pet1: Pet;
declare const pet2: Pet;
interface Information {
    id: number;
    enum1: Aminoxylates;
}
declare const someObject: Information;
declare const jsonObject: string;
