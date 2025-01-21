function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, "6"]; //Incorrect type

const combinedArray = combineArrays(array1, array2); 
console.log(combinedArray); //This will compile but will throw error at runtime