"use strict";
const myVal = process.argv
let mealCost = Number(myVal[2])
let tipPercent = Number(myVal[3])
const tipAmount = (tipPercent / 100) * mealCost
const totalOwing = tipAmount + mealCost
const outPut = `your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`

console.log(outPut)
