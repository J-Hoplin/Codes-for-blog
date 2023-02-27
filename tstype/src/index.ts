function anyExample(arg: any[]): void {
    arg.map(x => {
        console.log(x.charAt(0))
    })
}

let stringArr: string[] = ['abc', 'def', 'ghi']
anyExample(stringArr)
let numberArr: number[] = [1, 2, 3, 4, 5];
// anyExample(numberArr) //TypeError: x.charAt is not a function

function unknownExample(arg: unknown[]): void {
    arg.map(x => {
        if (typeof x === 'string') {
            console.log(`String : ${x.charAt(0)}`)
        }
        else if (typeof x === 'number') {
            console.log(`Number : ${x}`)
        } else {
            console.log(`Unknown : ${x}`)
        }
    })
}
unknownExample(stringArr)
unknownExample(numberArr)

let b1: boolean = true
let b2: true = true
let b3 = true

let n1: number = 10
let n2: 26.15 = 26.15
let n3 = 25

let bi1 = 10n;
let bi2: bigint = 100n;
let bi3: 20n = 20n;
// let bi4: bigint = 100.41n; // 리터럴은 정수여야함

let s1 = 'string';
let s2: 'string2' = 'string2';
let s3: string = 'string3';

let obj1: object = {
    a: 'x'
}
// obj1.a;//error TS2339: Property 'a' does not exist on type 'object'

let obj2: {
    a: string
} = {
    a: 'x'
}

console.log(obj2.a)

let c: {
    firstname: string,
    secondname: string,
    height: number
} = {
    firstname: 'yoon',
    secondname: 'hoplin',
    height: 172
}

// selective property

let sp: {
    b: number,
    c?: string
};
sp = {
    b: 10
}

sp = {
    b: 20,
    c: 'selective string'
}

//error TS2411: Property 'b' of type 'number' is not assignable to 'string' index type 'boolean'.
//error TS2411: Property 'c' of type 'string | undefined' is not assignable to 'string' index type 'boolean'.

// let sp2: {
//     b: number,
//     c?: string,
//     [key: string]: boolean
// }

let sp2: {
    b: number,
    c?: string,
    [key: string]: boolean | number | string | undefined
}

let sp3: {
    b: number,
    c?: string,
    [key: string | symbol]: boolean | number | string | undefined,
    [numType: number]: boolean
}

sp2 = {
    b: 10,
    c: 'hello',
    d: 10,
    e: true,
    f: false,
    g: 'string'
}

sp3 = {
    b: 100,
    10: true,
    e: 'hello'
}

type Age = number;
type Person = {
    name: string,
    age: Age
}

type sptype = {
    b: number,
    c?: string,
    [key: string | symbol]: boolean | number | string | undefined,
    [numType: number]: boolean
}

let sp4: sptype;
sp4 = {
    b: 100,
    10: true,
    e: 'hello'
}

type Cat = {
    name: string,
    purrs: boolean
}

type Dog = {
    name: string,
    barks: boolean,
    wags: boolean
}

type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

let a: CatOrDogOrBoth = {
    name: 'meow',
    purrs: true
}

let b: CatOrDogOrBoth = {
    name: 'bark',
    barks: true,
    wags: true
}

let ab: CatAndDog = {
    name: 'CatDog',
    purrs: true,
    barks: true,
    wags: true
}

let arr1: string[] = ['a', 'b']
let arr2 = [1, 2, 3, 4, 5]
let arr3 = [1, 2, 3, 4, 5, 'c', 'd'] // (string | number)[] 로 추론됨
let arr4: (string | boolean)[] = ['arr1', true, false, 'arr2']

let arr5 = [] // any[]
arr5.push(true); // boolean[]
arr5.push('red') // (string | boolean)[]

function arrTest(): (number | boolean)[] {
    let a = [];
    a.push(1);
    a.push(true)
    return a;
}

let tple: [number] = [1] // 하나의 인자만 올 수 있다.
let tple2: [string, string, number] = ['arr', 'tple', 10]
// tple2 = [10, 20, 30] // 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)

// tuple 타입 배열
let tple3: [number, number?][] = [[10], [10, 20], [30]]

let tple4: [number, number, number, ...number[]] = [1, 2, 3, 4, 5, 6, 7];

enum Language {
    English,
    Korean,
    Spanish,
    Russian
}

console.log(Language.English); //0
console.log(Language.Korean)// 1
console.log(Language.Spanish)// 2
console.log(Language.Russian)// 3

enum Language2 {
    English = 0,
    Korean = 'korean'
}

console.log(typeof Language2[10]) // undefined

const enum Language3 {
    Spanish = 10,
    Japanese = 20
}
// console.log(typeof Language3[10]); // const 열거형 멤버는 문자열 리터럴을 통해서만 액세스할 수 있습니다.ts(2476)

/**
 * as const는 객체나 배열도 const로 선언한 원시 값의 타입처럼, 리터럴 타입의 추론 범위를 줄이고 값의 재할당을 막아준다(readonly)
 */
const status = {
    todo: 'todo',
    inProgress: 'Inprogress'
} as const

//typeof : 객체 데이터를 객체 타입으로 변환해주는 연산자
//keyof : 객체 형태의 타입을, 따로 키값들만 뽑아 모아 유니온 타입으로 만들어주는 연산자
type Status = typeof status[keyof typeof status]
//https://www.typescriptlang.org/ko/docs/handbook/2/indexed-access-types.html