// let String = prompt("Enter the string")
// let reverse = "";
// for (i = String.length - 1;i >= 0; i--) 
// {
//     reverse += String[i];
// }
// console.log(reverse)


// let String = prompt("Enter the string")
// for (i = 0 ;i < String.length/2; i++) 
// {
//     if(String[i] !== String[String.length-1-i])
//     {
//         console.log ("not palindrome")
//     }
//     else{
//         console.log("palindrome")
//     }
// }

// for (let i = 1; i <= 200; i++) {
//     if (i % 3 === 0 && i % 5 === 0) 
//     {
//         console.log(i);
//     }
// }

let inp = Number(prompt("Enter your number"))
let fact = 1
for (let i = 1; i <= inp; i++) {
    fact = fact * i
}
console.log(fact)