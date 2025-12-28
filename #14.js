// const strs = ["programming", "p", "pr", "pro", "prog", "progr", "program", "programm", "programmi", "programmin",]
const strs = ["Debayan", "cat", "dog"]
let prefix = "";
for (let i = 0; i <= strs[0].length; i++) {
    const letters = strs[0][i];//p
    if(strs.length===0)
    {
        return prefix;
    }

    for (let j = 1; j < strs.length; j++) {
        
        if (i >= strs[j].length || strs[j][i] !==  letters ) {
            console.log(prefix) 
            return prefix;
        }
        
    }
        prefix += letters;
    
}











// const strs = ["flower", "flow", "flight", "fly"];

// let prefix = "";

// for (let i = 0; i < strs[0].length; i++) {
//     const char = strs[0][i];

//     for (let j = 1; j < strs.length; j++) {
//         if (i >= strs[j].length || strs[j][i] !== char) {
//             console.log(prefix);
//             return prefix;
//         }
//     }

//     prefix += char;
// }

// console.log(prefix);


















































// const strs = ["flower", "flow", "flight", "fly"]
// const newArrays = [];
// let subArray = [];
// let minLength;
// let yes;
// let prefixYes = [];
// let j = 0;
// // console.log(strs[0])
// // const subArray

// for (const str of strs) {
//   subArray[j] = str.split(','); // Split each string by comma


//   // console.log(`${j} no. of string's word is ${subArray[j]}`);
//   minLength = Math.min(subArray[j].length)
//   j++;

// }
// // console.log(" 1 no. of string's word is ", subArray[1])
// for (let i = 0, j = 0; i < minLength; i++) {
//   if (subArray[j[i]] == subArray[j + 1[i]] == subArray[j + 2[i]] == subArray[j + 3[i]]) {
//     console.log(`Difference found at index ${i}: '${str1[i]}' vs '${str2[i]}'`);
//     return false; // Strings are different
//   }
// }






































// let output = "";
// strs.forEach((v,) => {
//   for (let i = 0; i < v.length; i++) {
//     console.log(v[i]);
//     }
//   })
// console.log(output)
