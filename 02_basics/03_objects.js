// singleton
// Object.create - constructor

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Tejasw",
    "full name": "Tejasw Pratap Singh",
    [mySym]: "mykey1",
    age: 18,
    location:"Mau",
    email: "tejasw@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] 
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "tejasw@github.com"
// Object.freeze(JsUser)
JsUser.email = "tejasw@edge.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());