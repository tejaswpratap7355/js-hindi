const user = {
    username: "tejasw",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // node environment

// Browser of this keyword is run global object is called window object


// function chai () {
//     let username = "tejasw"
//     console.log(this.username);
// }

// chai()

// const chai = function chai() {
//      let username = "tejasw"
//     console.log(this.username);
// }
// chai()


const chai = () => {
     let username = "tejasw"
    console.log(this);
}

// chai()

// explicity retuns is used return keyword
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// implicity return is not used return keyword means let(man leta hu)
// const addtwo = (num1, num2) => num1 + num2

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "tejasw"})


console.log(addtwo(3, 4));


// const myArray = [2, 3, 4, 5, 6]

// myArray.forEach( () => {} )