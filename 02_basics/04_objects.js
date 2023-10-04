// const tinderUser = new Object() // singleton obj
const tinderUser = {} // literal obj

tinderUser.id = "1234abc"
tinderUser.name = "Tej"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname:{
            firstname: "tejasw",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1 ,obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"

    }
]
console.log(users[3].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

