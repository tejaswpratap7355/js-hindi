// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Tejasw"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true) {
    const Name = "Chai"
    if (Name === "Chai") {
        const website = "code"
        // console.log(Name + website);
    }
    // console.log(website);/
}

// console.log(Name);


// ++++++++++++++ interesting ++++++++++++

console.log(addone(5));
function addone(num) {
    return num + 1
}


// hosting
addTwo(5)
const addTwo = function(num) {
    return num + 2
}

