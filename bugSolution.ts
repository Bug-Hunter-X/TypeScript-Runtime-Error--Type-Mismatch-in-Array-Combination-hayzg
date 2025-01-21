function combineArrays(arr1: number[], arr2: number[]): number[] {
  //Type Guard to check if all elements are numbers
  const isNumberArray = (arr: any[]): arr is number[] => arr.every(item => typeof item === 'number');

  if (!isNumberArray(arr1) || !isNumberArray(arr2)) {
    throw new Error("Arrays must contain only numbers");
  }
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6]; //Correct Type

const combinedArray = combineArrays(array1, array2); 
console.log(combinedArray); 