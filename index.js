const express = require("express");

const app = express();

/*
Map ==> Transforms each element in a collection.
Reduce ==>  Combines elements into a single value.
Filter ==>  Selects elements based on a given condition."
*/
const numberAarr = [24,56,1,25,67,24,89,21,53,24,56];
const uniqueNumbers = (arrNumbers) => {
    const set = new Set();
    for (const number of arrNumbers) {
      set.add(number);
    }
    return [...set].reverse();
  };
  
  const doubleNumbers = (arrNumbers) => {
    return arrNumbers.map((number) => number * 2); //Map ==> Transforms each element in a collection.
  };
  
  const oddNumbers = (arrNumbers) => {
    return arrNumbers.filter((number) => number % 2 !== 0); //Filter ==>  Selects elements based on a given condition.
  };
  
  const sumOfNumbers = (arrNumbers) => {
    return arrNumbers.reduce((sum, number) => sum + number, 0); //Reduce ==>  Combines elements into a single value.
  };
  
  const sumOfDivisibleByThree = (arrNumbers) => {
    return arrNumbers.filter((number) => number % 3 === 0).reduce((sum, number) => sum + number, 0);
  };
  console.log(uniqueNumbers(numberAarr))
  console.log(doubleNumbers(numberAarr))
  console.log(oddNumbers(numberAarr))
  console.log(sumOfNumbers(numberAarr))
  console.log(sumOfDivisibleByThree(numberAarr))

 app.get("/ping", (req, res) => {
    res.send("pong");
  });
  
  app.listen(8080, () => {
    console.log("Server listening on port 8080");
  });