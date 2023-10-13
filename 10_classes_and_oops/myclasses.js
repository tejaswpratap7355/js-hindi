// ES6

// class User {
//     constructor(Username, email, password) {
//         this.Username = Username
//         this.email = email 
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return`${this.Username.toUpperCase()}`
//     }
// }

// const tej = new User("tej", "tej@gmail.com", "123")

// console.log(tej.encryptPassword());
// console.log(tej.changeUsername());


// behind the scene

function User(Username, email, password){
    this.Username = Username
    this.email = email 
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function() {
    return `${this.Username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());