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
  console.log("Normal uniqueNumbers",uniqueNumbers(numberAarr))
  console.log("Normal doubleNumbers",doubleNumbers(numberAarr))
  console.log("Normal oddNumbers",oddNumbers(numberAarr))
  console.log("Normal sumOfNumbers",sumOfNumbers(numberAarr))
  console.log("Normal sumOfDivisibleByThree",sumOfDivisibleByThree(numberAarr))



const uniqueNumbers2 = async (arrNumbers) => {
  const set = new Set();
  for (const number of arrNumbers) {
    await set.add(number);
  }
  return [...set].reverse();
};

const doubleNumbers2 = async (arrNumbers) => {
  const results = arrNumbers.map(async (number) => {
    const doubledNumber = await Promise.resolve(number * 2);
    return doubledNumber;
  });
  return results;
};

  const oddNumbers = (arrNumbers) => {
    return arrNumbers.filter((number) => number % 2 !== 0); //Filter ==>  Selects elements based on a given condition.
  };
  
  
const oddNumbers2 = async (arrNumbers) => {
  const oddNumbers = await Promise.resolve(arrNumbers.filter((number) => {
    return number % 2 !== 0;
  }));
  return oddNumbers;
};

const sumOfNumbers2 = async (arrNumbers) => {
  let sum = 0;
  for (const number of arrNumbers) {
    const currentSum = await Promise.resolve(number);
    sum += currentSum;
  }
  return sum;
};

const sumOfDivisibleByThree2 = async (arrNumbers) => {
  const divisibleByThreeNumbers = await Promise.resolve(arrNumbers.filter((number) => number % 3 === 0));
  let sum = 0;
  for (const number of divisibleByThreeNumbers) {
    const currentSum = await Promise.resolve(number);
    sum += currentSum;
  }
  return sum;
}; 

const result = async ()=> {
	const  uniqueNumbers22  = await uniqueNumbers2(numberAarr);
const  doubleNumbers22  = await doubleNumbers2(numberAarr);
const  oddNumbers22  = await oddNumbers2(numberAarr);
const  sumOfNumbers22  = await sumOfNumbers2(numberAarr);
const  sumOfDivisibleByThree22  = await sumOfDivisibleByThree2(numberAarr);
  console.log("Promis uniqueNumbers22",uniqueNumbers22)
  console.log("Promis doubleNumbers22",doubleNumbers22)
  console.log("Promis oddNumbers22",oddNumbers22)
  console.log("Promis sumOfNumbers22",sumOfNumbers22)
  console.log("Promis sumOfDivisibleByThree22",sumOfDivisibleByThree22)
}

result();


 app.get("/ping", (req, res) => {
    res.send("pong");
  });
  
  app.listen(8080, () => {
    console.log("Server listening on port 8080");
  });