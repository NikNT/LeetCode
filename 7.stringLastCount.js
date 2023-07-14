const s = " Hello World  There                  Hey";

// const arr = s.split(" ").filter((word) => word !== "");
// const lenOflastWord = arr[arr.length - 1].length;

// console.log(lenOflastWord);

const arr = s.trim().split(/\s+/);
console.log(arr[arr.length - 1].length);
