// // baitap1
// let employees = [
//     {
//         name: "John",
//         age: 21,
//         budget: 23000
//     },
//     {
//         name: "Steve",
//         age: 32,
//         budget: 40000
//     },
//     {
//         name: "Martin",
//         age: 16,
//         budget: 2700
//     },
// ]

// function getTotalSalary(employees) {
//     let sum = 0;
//     for (i = 0; i < employees.length; i++) {
//         sum += employees[i].budget;
//     }
//     return sum;
// }

// console.log(getTotalSalary(employees));


// baitap2
// let order = [
//     { "Shampoo": 5.99, "Rubber Ducks": 15.99 },
//     { "Flatscreen TV": 399.99 },
//     { "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }
// ]

// function freeShipping(order){
//     for (let i = 0; i < order.length; i++) {
//         let sum = 0;
//         let values = Object.values(order[i]);
//         for (let j = 0; j < values.length; j++) {
//             sum += values[j];
//         }
//         if (sum < 50){
//             console.log("Tổng của đơn hàng là: " + sum + " không đủ điều kiện free ship");
//         }
//         else{
//             console.log("Tổng của đơn hàng là: " + sum + " đủ điều kiện free ship");
//         }
//     }
// }
// freeShipping(order)

//baitap3
// const GUEST_LIST = {
//     Randy: "Germany",
//     Karla: "France",
//     Wendy: "Japan",
//     Norman: "England",
//     Sam: "Argentina"
// }
// function greeting(name) {
//     if (name in GUEST_LIST) {
//         return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
//     } else {
//         return "Hi! I'm a guest.";
//     }
// }
// console.log(greeting("Randy"));

let contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
},
{
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
},
{
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
},
{
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
}
];

function lookUpProfile(name, prop) {
    // Only change code below this line
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].firstName === name) {
                if (contacts[i].hasOwnProperty(prop)) {
                    return name + " " + prop + ": " + contacts[i][prop];
                } else {
                    return "Không tìm thấy thuộc tính";
                }
            }
        }
        return "Không tìm thấy liên hệ";
    }


// Only change code above this line

console.log(lookUpProfile("Akira", "coler"));