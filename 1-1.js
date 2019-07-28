/*4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such
element does not exist, return -1)*/

function minPositivNumber(arr=[],min=Infinity){
		if (arr.length === 0){
		return min !== Infinity? min :-1
		}
let deletItem = arr.shift();
let arg = deletItem <= min && deletItem >=0 ? deletItem : min;
return minPositivNumber(arr,arg);

 
 }

console.log(minPositivNumber([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(minPositivNumber([45, -9, 15, 5, -78]));
console.log(minPositivNumber([-5, -9, -111, -1000, -7]));



/* 1. Write a function which receives an array and a number as arguments and returns a new array
from the elements of the given array which are larger than the given number. */
/* anushadrakan let arr er grvel */


function arrayMoreGivenNumber(arr, x){
let arrNew = [];
	for (let i = 0; i < arr.length; i++)
		if (arr[i]>x){
		arrNew.push(arr[i]);
		}
		if (arrNew.length!==0)
		return arrNew;
		else
		return "Such values don't exist.";
}
console.log(arrayMoreGivenNumber([10, 25, 16, -5, 30, 15, 24], 16));
console.log(arrayMoreGivenNumber([1,1,2,-3,0,8,4,0], 9));