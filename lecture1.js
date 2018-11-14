//Map
const x = [0, 1, 2, 3]
function addOne(number){
    return number + 1;
}
addOne(1)

x.map(addOne(1))
//Filter
function isGreaterThanOne(num){
    return num > 1
}
//Reduce
function add(x, y){
    return x + y;
}

add(1, 2);
x.reduce(add)

//Higher order Functions
function map(arr, fn){
    const newArr = []

    for (let i = 0; i < arr.length; i++){
        let val = arr[i]
        newArr.push(fn(val))
    }

    return newArr;
}

function addOne(num){
    return num + 1
}

const x = [0,1,2,3,4]

console.log(map(x, addOne))

//An attempt to fill up the stack
// function recurse(){
//     console.log('recursion');
//     return recurse()
// }


//Async function
function doSomething(callback){
    setTimeOut(function() {callback(1)}, 1000)
}

doSomething(console.log)

//this

const person = {
    name: "Ronnie",
    greet: function() { console.log("hello" + this.name)},
}

person.greet()

const friend = {
    name: "David",
}

friend.greet = person.greet

friend.greet()

const greet = person.greet

greet()