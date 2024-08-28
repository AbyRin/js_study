const address = ["east", "123 wenyi road", "hangzhou", "310012", "china"];

const [, , city, zip] = address;

// hanghou and 310012
console.log(`${city} and ${zip}`);

let arr = [1, 2, 3];
let newArr = [...arr];
newArr.push(4);
console.log(arr, newArr);  // [1, 2, 3] [1, 2, 3, 4]