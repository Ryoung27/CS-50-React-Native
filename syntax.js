const firstName = "Ronnie";
const lastName = "Young";

const val = 42

const arry = ["string",
42,
function(){ console.log('hi')},
]

arry[2]()

for (let i = 0; i < arry.length; i++){
    console.log(arr[i])
}

const x = 42

console.log(typeof 42)

const o = new Object()
o.firstName = "Ronnie"
o.lastName = "Young"
o.isLearning = true
o.greet = function(){
    console.log('hi')
}

const o2 = {}
o.firstName = "Ronnie"
o['lastName'] = "Young"
const key = "isLearning"
o[key] = true
o['greet'] = function(){
    console.log('hi')
}

const o3 = {
    firstName: "Ronnie",
    lastName: "Young",
    isLearning: true,
    greet: function(){
        console.log('hi')
    },
    address: {
        street: "Main St.",
        number: 123
    }
}

o3.address

03.address.number

const x = {
    a: 'a',
    b: 'b'
}

const x2 = x

x.a = "new value"

console.low(x2.a)

//Prototype inhertiance

const arr = []

arr.push('value')
arr.push('value two')



