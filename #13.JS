//solved

const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
const s = "MCMXCIV"


let output = 0;
for (let i = 0; i < s.length; i++) {
  if (roman[s[i]] < roman[s[i + 1]]) {
    output -= roman[s[i]];
  }
  else {
    output += roman[s[i]];
  }
}
return output;




// const roman = {
//   I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
// };

// let output = 0;
// const s = "MCMXCIV";

// // start prValu as the first symbol's value
// let prValu = roman[s[0]];

// // handle pairs left-to-right, starting from index 1
// for (let i = 1; i < s.length; i++) {
//   const value = roman[s[i]];
//   if (prValu < value) {
//     // prValu is being subtracted by the next bigger symbol
//     output += value - prValu;
//   } else {
//     // prValu stands alone, add it
//     output += prValu;
//   }
//   prValu = value;
// }

// // add the last pending symbol
// output += prValu;

// console.log(output); // 1994




// const roman = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
// const s = "MCMXCIV";

// let output = 0;
// let prValu = roman[s[0]]; // hold the previous symbol's value (don't add it yet)

// for (let i = 1; i < s.length; i++) {
//   const value = roman[s[i]];
//   if (prValu < value) {
//     // previous is part of a subtractive pair (like IV, IX)
//     output += (value - prValu);
//   } else {
//     // previous stands alone
//     output += prValu;
//   }
//   prValu = value;
// }

// // add the last pending symbol
// output += prValu;

// console.log(output); // 1994





// const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//  let output = 0;
//  let prValu = 0; const s = "MCMXCIV" ;
//  const firstletter = s[0];
//  prValu += roman[firstletter];
//  for (let i = 0; i < s.length; i++)
//   { letter = s[i];
//     let value = roman[letter];
//     if (value > prValu && prValu !== 0 && value !== prValu)
//        {
//         let newValue = (value - prValu);
//          output += newValue; }
//      else { output += value } prValu = value; }
//      console.log(output)

