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