
const myArray = [1, 2, 3] 

{
  for (let i = 0, j = myArray.length - 1; i < j; i++, j--)
    [myArray[i], myArray[j]] = [myArray[j], myArray[i]];
}


console.log(myArray)

const myArray2 = [1, 3, 5, 7, 9, 11] 

{
  for (let i = 0, j = myArray.length - 1; i < j; i++, j--)
[myArray2[i], myArray2[j]] = [myArray2[j], myArray2[i]];

  }

console.log(myArray2)

const myArray3 = [20, 50, 30, 60, 200] 

{
  for (let i = 0, j = myArray.length - 1; i < j; i++, j--)
[myArray3[i], myArray3[j]] = [myArray3[j], myArray3[i]];
  }

console.log(myArray3)


const myArray4 = [1, -1, 2, -3, 5, -8, 13]

{

  for (let i = 0, j = myArray.length - 1; i < j; i++, j--)
    [myArray4[i], myArray4[j]] = [myArray4[j], myArray4[i]];
}


console.log(myArray4)