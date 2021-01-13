var arr = [10, 1, 9, 2, 8, 3, 7, 4, 6];

arr.sort();
console.log("up \n");
arr.forEach(element => {
    console.log(element);
});

arr.reverse();

console.log("down \n");
arr.forEach(element => {
    console.log(element);
});

console.log("max  ");
console.log(Math.max(...arr));
console.log("\n");

console.log("min");
console.log(Math.min(...arr));
console.log("\n");


console.log("sum");
var sum = 0;
arr.forEach(element => {
    sum += element;
});
console.log(sum);
console.log("\n");

const len = arr.length;
const arrSort = arr.sort();
const mid = Math.ceil(len / 2);

const median =
    len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];

console.log("median: ", median);

console.log("\n");




