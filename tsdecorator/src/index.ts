function trace(classPrototype:any, methodName:string,descriptor:PropertyDescriptor):any{
    console.log(`${methodName} function called`)
}

class DecoTest{
    @trace
    public fn1(){
        console.log('Decorator test')
    }
}

const dt = new DecoTest()
dt.fn1()

function first(str:string){
    console.log(`first() ${str} decorator called`)
    return function(classPrototype:any, methodName:string, descriptor:PropertyDescriptor):any{
        console.log("first() called")
    }
}

function second(str: string){
    console.log(`second() factory ${str} called`)
    return function(classPrototype:any, propertyKey:string,descriptor:PropertyDescriptor):any{
        console.log("second() decorator will change function's content")
        descriptor.value = () => {
            console.log("Changed Call")
        }
    }
}

class DecoTest2{
    @first("First ")
    @second("decorator")
    public method(){
        console.log("method() called")
    }
}

const dt2 = new DecoTest2();
dt2.method();
    
type ClassConstructor = new (...args: any[]) => any;
function ClassDecoTest<T extends ClassConstructor>(Constructor: T){
    return class extends Constructor{
        newURL = "www.google.com"
        
        // Object.prototype.toString()
        toString(){
            console.log("toString() called")
        }

        main(){
            console.log("Changed main() method")
        }
    }
}

@ClassDecoTest
class Reporter{
    type="reporter"
    public main(){
        console.log("main()")
    }
}

const rpt = new Reporter();
console.log((rpt as any).newURL)
rpt.main()
rpt.toString()

const exobj = {
    key : 'value',
    key2: 20
}

console.log(Object.getOwnPropertyDescriptor(exobj,'key'))
Object.defineProperty(exobj,'key',{
    value: 10
})
console.log(Object.getOwnPropertyDescriptor(exobj,'key'))

console.log(Object.getOwnPropertyDescriptors(exobj))

function methodDeco(){
    return function(prototype:any,methodName: string,descriptor:PropertyDescriptor){
        console.log(prototype);
        console.log(methodName);
        console.log(descriptor);

        const originalMethod = descriptor.value

        descriptor.value = function(){
            try{
                originalMethod()
            }catch(err){
                console.log(err)
            }
        }
    }
}

class MethodDecoCls{
    @methodDeco()
    public testMethod(){
        throw new Error("Method Decorator test")
    }
}

const mdc = new MethodDecoCls();
mdc.testMethod()


function isEnumerable(enumerable:boolean){
    return function(prototype:any,accessorName:string,descriptor:PropertyDescriptor){
        descriptor.enumerable = enumerable;
    }
}

class GetterSetter{
    constructor(private firstname:string, private lastname:string){}

    @isEnumerable(true)
    get getFullName():string{
        return `${this.firstname} ${this.lastname}`
    }

    @isEnumerable(false)
    set setFullName(fullname: string){
        const [firstname,lastname] = fullname.split(' ')
        this.firstname = firstname
        this.lastname = lastname
    }
}

const gs = new GetterSetter("Yoon", "Hoplin")
console.log(gs.getFullName)
gs.setFullName = "Yoon Junho"
console.log(gs.getFullName)

for(let key in gs){
    console.log(`${key} : ${(gs as any)[key]}`)
}


function formatPrinter(formatedString: string){
    return function(prototype:any, memberName: string): any{
        console.log("hit")
        let value = prototype[memberName]
        const getter = () => `${formatedString} ${value}`
        const setter = (newvalue:string) => {
            value = newvalue
        }

        return {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        }
    }
}

class Greeter{
    @formatPrinter("Hello")
    public greeting:string='';
}

const t = new Greeter();
t.greeting = "World"
console.log(t.greeting)

t.greeting = "World"
console.log(t.greeting)


function classDeco(){
    console.log("Class deco evaluated")
    return function classDeco<T extends ClassConstructor>(Constructor: T){
        console.log("Class decorator")
        return class extends Constructor{

        }
    }    
}

function propertyDeco(){
    console.log("Property deco evaluated")
    return function(prototype:any, memberName:string){
        console.log("Property decorator")
    }
}

function paramDeco(){
    console.log("Param deco evaluated")
    return function(prototype: any, propertyKey: string, parameterIndex:number){
        console.log(parameterIndex)
        console.log("Param deco")
    }
}

function methodDeco2(){
    console.log("Method deco evaluated")
    return function(prototype:any, propertyKey:string, descriptor: PropertyDescriptor){
        console.log("Method deco")
    }
}


@classDeco()
class User{

    @propertyDeco()
    value:string=" "

    @methodDeco2()
    setP(@paramDeco() p1:string, @paramDeco() p2:number){

    }
}

const u1 = new User();
u1.setP('10',20)

console.log("--------------------")

function MinLength(min: number){
    return function(target: any, propertyName: string, parameterIndex: number){
        target.validator = {
            minLength: function(args: string[]){
                return args[parameterIndex].length >= min;
            }
        }
    }
}

function Validate(target: any, propertyKey: string,descriptor: PropertyDescriptor){
    const method:Function = descriptor.value;
    descriptor.value = function(...args: string[]){
        Object.keys(target.validator).forEach(key => {
            console.log(args)
            if(!target.validator[key](args)){
                throw new Error("Less length")
            }
        })
        method.apply(this,args)
    }
}

class User2{
    private name:string = "";

    @Validate
    setName(
        @MinLength(3) name:string,
    ){
        this.name = name;
    }
}

const u2 = new User2()
u2.setName('ab')
/**
 * Error: Less length
    at /Users/hoplin/study/Codes-for-blog/tsdecorator/dist/index.js:265:23
 */