"use strict";
function anyExample(arg) {
    arg.map(x => {
        console.log(x.charAt(0));
    });
}
let stringArr = ['abc', 'def', 'ghi'];
anyExample(stringArr);
let numberArr = [1, 2, 3, 4, 5];
// anyExample(numberArr) //TypeError: x.charAt is not a function
function unknownExample(arg) {
    arg.map(x => {
        if (typeof x === 'string') {
            console.log(`String : ${x.charAt(0)}`);
        }
        else if (typeof x === 'number') {
            console.log(`Number : ${x}`);
        }
        else {
            console.log(`Unknown : ${x}`);
        }
    });
}
unknownExample(stringArr);
unknownExample(numberArr);
let b1 = true;
let b2 = true;
let b3 = true;
let n1 = 10;
let n2 = 26.15;
let n3 = 25;
let bi1 = 10n;
let bi2 = 100n;
let bi3 = 20n;
// let bi4: bigint = 100.41n; // 리터럴은 정수여야함
let s1 = 'string';
let s2 = 'string2';
let s3 = 'string3';
let obj1 = {
    a: 'x'
};
// obj1.a;//error TS2339: Property 'a' does not exist on type 'object'
let obj2 = {
    a: 'x'
};
console.log(obj2.a);
let c = {
    firstname: 'yoon',
    secondname: 'hoplin',
    height: 172
};
// selective property
let sp;
sp = {
    b: 10
};
sp = {
    b: 20,
    c: 'selective string'
};
//error TS2411: Property 'b' of type 'number' is not assignable to 'string' index type 'boolean'.
//error TS2411: Property 'c' of type 'string | undefined' is not assignable to 'string' index type 'boolean'.
// let sp2: {
//     b: number,
//     c?: string,
//     [key: string]: boolean
// }
let sp2;
let sp3;
sp2 = {
    b: 10,
    c: 'hello',
    d: 10,
    e: true,
    f: false,
    g: 'string'
};
sp3 = {
    b: 100,
    10: true,
    e: 'hello'
};
let sp4;
sp4 = {
    b: 100,
    10: true,
    e: 'hello'
};
let a = {
    name: 'meow',
    purrs: true
};
let b = {
    name: 'bark',
    barks: true,
    wags: true
};
let ab = {
    name: 'CatDog',
    purrs: true,
    barks: true,
    wags: true
};
let arr1 = ['a', 'b'];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5, 'c', 'd']; // (string | number)[] 로 추론됨
let arr4 = ['arr1', true, false, 'arr2'];
let arr5 = []; // any[]
arr5.push(true); // boolean[]
arr5.push('red'); // (string | boolean)[]
function arrTest() {
    let a = [];
    a.push(1);
    a.push(true);
    return a;
}
let tple = [1]; // 하나의 인자만 올 수 있다.
let tple2 = ['arr', 'tple', 10];
// tple2 = [10, 20, 30] // 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
// tuple 타입 배열
let tple3 = [[10], [10, 20], [30]];
let tple4 = [1, 2, 3, 4, 5, 6, 7];
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Korean"] = 1] = "Korean";
    Language[Language["Spanish"] = 2] = "Spanish";
    Language[Language["Russian"] = 3] = "Russian";
})(Language || (Language = {}));
console.log(Language.English); //0
console.log(Language.Korean); // 1
console.log(Language.Spanish); // 2
console.log(Language.Russian); // 3
var Language2;
(function (Language2) {
    Language2[Language2["English"] = 0] = "English";
    Language2["Korean"] = "korean";
})(Language2 || (Language2 = {}));
console.log(typeof Language2[10]);
//# sourceMappingURL=index.js.map