// two sum 

//solved

let nums=[2,7,11,15]
let target=9;
let result=[];
nums.forEach((v1,i1)=>{
    nums.forEach((v2,i2)=>{
     if(target===v1+v2 && i1<i2){
     result.push(i1,i2);
     }

});
});
console.log(result);


// let nums = [2, 7, 11, 15];
// let target = 13;
// let result = [];

// nums.forEach((v1, i1) => {
//   nums.forEach((v2, i2) => {
//     if (target === v1 + v2 && i1 < i2) {
//       result.push([i1, i2]);
//     }
//   });
// });

// console.log(result);