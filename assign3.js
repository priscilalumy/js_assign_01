"use strict";
const myConst = process.argv
let varSum = Number(myConst[2]) + Number(myConst[3])
let myMsg
if (varSum > 10 && varSum < 100){
    myMsg = (`${varSum} is greater than 10 and lower than 100`)
} else if (varSum > 100 && varSum < 1000){
    myMsg = (`${varSum} is greater than 100 and lower than 1000`)
}
console.log(myMsg)





