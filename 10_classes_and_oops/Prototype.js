let myName = "tejasw      "
let myChannel = "Chai    "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function() {
        console.log(`Spidy power is${this.spiderman}`);
    }
}

Object.prototype.tejasw = function() {
    // console.log(`tejasw is present in all object`);
}

Array.prototype.heyTejasw = function() {
    // console.log(`Tejasw says hello`);
}

// heroPower.tejasw()

myHeros.tejasw()
myHeros.heyTejasw()
// heroPower.heyTejasw()

// inheritance

const User = {
    name: "tej",
    email: "tej@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "PratapSingh    "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"tejasw".trueLength()
"tea".trueLength()