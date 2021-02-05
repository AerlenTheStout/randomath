
//changeing what is on the screen with javascript

//var age = prompt('What is your age?')
//document.getElementById('sometext').innerHTML = age;

// numbers\\
//document.getElementById('sometext').innerHTML = num1;


//var num1 = 10

//Plus 1
//console.log(num1 + 1)

//Plus any num
//console.log(num1 += 10)

//Minus 1
//console.log(num1 - 1)

//Multiply
//console.log(num1 * 2)

//Divide
//console.log(num1 / 5)

//Remainder
//console.log(num1 % 3)


/*functions
STEP 1 Create the funtion
STEP 2 Call the funtion
*/



/* lets make a function that when called says hello your name 
for example

Name: "james"
return: hello james
*/


/*function greeting(yourName){
    var result = 'hello ' + yourName; // creates response
    console.log(result) //displays response
}

var yourName = prompt('what is your name'); //asks your name

greeting();*/

// arguments in functions
//adding 2 numbers in a function

/*function sumNumbers(num1, num2){
var result = num1 + num2;
console.log(result)

}

sumNumbers(10, 10)*/

//WHILE LOOPS

/*var num = 0;

while (num < 100){
    num += 1;
    console.log(num)

}*/

//for loop
/*
for (let num = 0; num < 100; num++){
    console.log(num);

}
*/

// Data types
let age = 20      // number
let name = 'bob'  //string
let longname = {first: 'james', last: 'Doe'}; //object
let truth = false //boolean
let grocries = ['apple', 'bannana', 'orange'] //list
let nothing = null // null

//strings in js
let fruit = 'banana';
let morefruits = 'apple\nbanana\njuice'
let superfruit = 'apple,banana,juice'
console.log(morefruits)
console.log(superfruit)

console.log(fruit.indexOf('n'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123 '));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(3));
console.log(fruit[2]);
console.log(superfruit.split(',')); //split at the comma of superfruit
console.log(superfruit.split('')); //split every charcter

//array

let fruits = new Array('banana','apple','pineapple')
//fruits = new Array('banana','apple','pineapple')
console.log(fruits[2]);

const arr = new Array('try',"me")
arr[0] = ('eat')
console.log(arr)



let anwser = prompt('what is 1 + 1')
if(anwser == 2){
    
    document.getElementById('hello name').innerHTML = ('Correct');

    } else{
        document.getElementById('hello name'  ).innerHTML = ('Incorrect');
    }
      
    




