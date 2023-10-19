// Immediately Invoked Function Expressions (IIFE)
// Global scope of such as Declare/Variable to REMOVE

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed IIFE
console.log(`DB CONNECTED TWO ${name}`);
})("tejasw")