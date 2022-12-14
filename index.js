// ARRAY

let array = [13,24,33,4345,532,45678,600,700,1000]

// // FOR - repeats a section of code until a condition has been satisfied

// for (let index = 0; index < array.length; index++) {
//     if (array[index] == 4345) {
//         continue;
//     }
//     console.log(array[index]);
    
// }

// WHILE


let i=0;

while (i<array.length) {
    console.log('while', array[i]);
    i++;
    
}

// DOWHILE
let k=0;
do { 
    console.log('dowhile', array[k]);
     k++;  
} while (k<array.lenght);