"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function trace(classPrototype, methodName, descriptor) {
    console.log(`${methodName} function called`);
}
class DecoTest {
    fn1() {
        console.log('Decorator test');
    }
}
__decorate([
    trace,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DecoTest.prototype, "fn1", null);
const dt = new DecoTest();
dt.fn1();
function first(str) {
    console.log(`first() ${str} decorator called`);
    return function (classPrototype, methodName, descriptor) {
        console.log("first() called");
    };
}
function second(str) {
    console.log(`second() factory ${str} called`);
    return function (classPrototype, propertyKey, descriptor) {
        console.log("second() decorator will change function's content");
        descriptor.value = () => {
            console.log("Changed Call");
        };
    };
}
class DecoTest2 {
    method() {
        console.log("method() called");
    }
}
__decorate([
    first("First "),
    second("decorator"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DecoTest2.prototype, "method", null);
const dt2 = new DecoTest2();
dt2.method();
function ClassDecoTest(Constructor) {
    return class extends Constructor {
        constructor() {
            super(...arguments);
            this.newURL = "www.google.com";
        }
        // Object.prototype.toString()
        toString() {
            console.log("toString() called");
        }
        main() {
            console.log("Changed main() method");
        }
    };
}
let Reporter = class Reporter {
    constructor() {
        this.type = "reporter";
    }
    main() {
        console.log("main()");
    }
};
Reporter = __decorate([
    ClassDecoTest
], Reporter);
const rpt = new Reporter();
console.log(rpt.newURL);
rpt.main();
rpt.toString();
const exobj = {
    key: 'value',
    key2: 20
};
console.log(Object.getOwnPropertyDescriptor(exobj, 'key'));
Object.defineProperty(exobj, 'key', {
    value: 10
});
console.log(Object.getOwnPropertyDescriptor(exobj, 'key'));
console.log(Object.getOwnPropertyDescriptors(exobj));
function methodDeco() {
    return function (prototype, methodName, descriptor) {
        console.log(prototype);
        console.log(methodName);
        console.log(descriptor);
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            try {
                originalMethod();
            }
            catch (err) {
                console.log(err);
            }
        };
    };
}
class MethodDecoCls {
    testMethod() {
        throw new Error("Method Decorator test");
    }
}
__decorate([
    methodDeco(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MethodDecoCls.prototype, "testMethod", null);
const mdc = new MethodDecoCls();
mdc.testMethod();
function isEnumerable(enumerable) {
    return function (prototype, accessorName, descriptor) {
        descriptor.enumerable = enumerable;
    };
}
class GetterSetter {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    set setFullName(fullname) {
        const [firstname, lastname] = fullname.split(' ');
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
__decorate([
    isEnumerable(true),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], GetterSetter.prototype, "getFullName", null);
__decorate([
    isEnumerable(false),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], GetterSetter.prototype, "setFullName", null);
const gs = new GetterSetter("Yoon", "Hoplin");
console.log(gs.getFullName);
gs.setFullName = "Yoon Junho";
console.log(gs.getFullName);
for (let key in gs) {
    console.log(`${key} : ${gs[key]}`);
}
function formatPrinter(formatedString) {
    return function (prototype, memberName) {
        console.log("hit");
        let value = prototype[memberName];
        const getter = () => `${formatedString} ${value}`;
        const setter = (newvalue) => {
            value = newvalue;
        };
        return {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        };
    };
}
class Greeter {
    constructor() {
        this.greeting = '';
    }
}
__decorate([
    formatPrinter("Hello"),
    __metadata("design:type", String)
], Greeter.prototype, "greeting", void 0);
const t = new Greeter();
t.greeting = "World";
console.log(t.greeting);
t.greeting = "World";
console.log(t.greeting);
function classDeco() {
    console.log("Class deco evaluated");
    return function classDeco(Constructor) {
        console.log("Class decorator");
        return class extends Constructor {
        };
    };
}
function propertyDeco() {
    console.log("Property deco evaluated");
    return function (prototype, memberName) {
        console.log("Property decorator");
    };
}
function paramDeco() {
    console.log("Param deco evaluated");
    return function (prototype, propertyKey, parameterIndex) {
        console.log(parameterIndex);
        console.log("Param deco");
    };
}
function methodDeco2() {
    console.log("Method deco evaluated");
    return function (prototype, propertyKey, descriptor) {
        console.log("Method deco");
    };
}
let User = class User {
    constructor() {
        this.value = " ";
    }
    setP(p1, p2) {
    }
};
__decorate([
    propertyDeco(),
    __metadata("design:type", String)
], User.prototype, "value", void 0);
__decorate([
    methodDeco2(),
    __param(0, paramDeco()),
    __param(1, paramDeco()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], User.prototype, "setP", null);
User = __decorate([
    classDeco()
], User);
const u1 = new User();
u1.setP('10', 20);
console.log("--------------------");
function MinLength(min) {
    return function (target, propertyName, parameterIndex) {
        // console.log(target)
        // console.log("Here")
        // console.log(propertyName)
        // console.log(parameterIndex)
        target.validator = {
            minLength: function (args) {
                return args[parameterIndex].length >= min;
            }
        };
    };
}
function Validate(target, propertyKey, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        Object.keys(target.validator).forEach(key => {
            console.log(args);
            if (!target.validator[key](args)) {
                throw new Error("Less length");
            }
        });
        method.apply(this, args);
    };
}
class User2 {
    constructor() {
        this.name = "";
    }
    setName(name) {
        this.name = name;
    }
}
__decorate([
    Validate,
    __param(0, MinLength(3)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], User2.prototype, "setName", null);
const u2 = new User2();
u2.setName('ab');
//# sourceMappingURL=index.js.map