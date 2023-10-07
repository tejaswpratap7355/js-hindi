// Immediately Invoked Function Expressions (IIFE)
// Global scope of such as variable to leave

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed IIFE
console.log(`DB CONNECTED TWO ${name}`);
})("tejasw")