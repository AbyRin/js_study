// 控制台输出
console.log('hello world');

// 变量与常量
// var 全局变量
// let 局部变量，可修改
// const 常量，不可修改；如果是数组或对象，内部可以改变；在声明时就要初始化数值


// 原生数据类型
// String, number, boolean, null, undefined, symbol
const username = 'John';
const age = 30;
const isMale = true;
const height = 1.8;
const x = null;  // 定义为空
const y = undefined;  // 不存在定义
let z;

console.log(typeof z);

// 连接
console.log('My name is ' + username + ' and I am ' + age);
console.log(`My name is ${username} and I am ${age}`);  // 反引号在ESC键下

// 字符串的内置方法
const s = 'Hello World';

console.log(s.length);  // 字符串长度
console.log(s.toUpperCase());  // 转换为大写
console.log(s.substring(0, 5).toUpperCase());  // 截取字符串
console.log(s.split(''));  // 分割字符串为数组

// 数组: 每个元素可以是不同数据类型
const numbers = new Array(1, 2, 3, 4, 5);  // 创建数组
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];  // 创建数组
console.log(fruits);

console.log(fruits[1]);  // 访问数组元素
console.log(fruits[fruits.length - 1]);  // 访问数组最后一个元素
console.log(fruits.push('mangos'));  // 在数组末尾添加元素
console.log(fruits.unshift('strawberries'));  // 在数组开头添加元素
console.log(fruits.pop());  // 删除数组最后一个元素
console.log(fruits.shift());  // 删除数组第一个元素
console.log(fruits.indexOf('oranges'));  // 查找元素的索引

// 对象: 键值对的集合
const person =  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);  // 访问对象属性
console.log(person.hobbies[1]);  // 访问对象属性
console.log(person.address.city);  // 访问对象属性
console.log(person.address['city', 'state']);  // 访问对象属性

const { firstName, lastName, address: { city } } = person;  // 解构
console.log(firstName, lastName, city);

person.email = 'john@gmail.com';  // 添加属性
console.log(person);

// 对象数组和json
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);  // 转换为json
console.log(todoJSON);

// if条件语句
const x1 = 10;
const y1 = 11;

if (x1 === 10) {  // === 严格限制数据类型相同
    console.log('x is 10');
} else if (x1 > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

if (x1 > 5 || y1 > 10) { 
    // || 或, && 且, ! 非
    // != 不等于, !== 不严格相等, == 不严格相等, === 严格相等
    // >= 大于等于, <= 小于等于, > 大于, < 小于
    console.log('x is more than 5 or y is more than 10');
}

// 三目运算符
const x2 = 10;
const color = x2 > 10 ? 'red' : 'blue';
console.log(color);
// ? : 三目运算符, if else的简写,
// 三目运算符的结果可以赋值给变量，if else不可以
// 三目运算符可以嵌套, if else不可以
// 三目运算符可以写在一行, if else不可以
// 三目运算符可以写在return后面, if else不可以
// 三目运算符可以写在console.log后面, if else不可以
// 三目运算符可以写在函数参数里面, if else不可以
// 三目运算符可以写在数组里面, if else不可以
// 三目运算符可以写在对象里面, if else不可以
// 三目运算符可以写在函数里面, if else不可以
// 三目运算符可以写在类里面, if else不可以

// switch条件语句
switch (color) {
    case 'red':
    // case后面跟的是变量, 不是条件, 不是表达式, 不是函数, 不是运算符, 不是值
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        // default是可选的, 可以有多个
        break;
}

// for循环语句
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.text);
}

// while循环语句
let i = 0;
while (i < 10) {  // 必须在while里改变循环变量，否则会变成死循环
    console.log(`While Loop Number: ${i}`);
    i++;
}