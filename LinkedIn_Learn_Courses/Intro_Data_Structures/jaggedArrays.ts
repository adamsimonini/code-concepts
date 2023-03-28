let jaggedNumberArr: number[][] = [
	[1, 2, 3, 5],
	[10, 6, 55]
];

let jaggedStringArr: string[][] = [
	["ha", "he", "ho"],
	["my", "stringy", "thingy", "one more time"]
];

let arr_nums: number[] = [1, 7, 77, 777];

let arr_names: string[] = new Array(4);

console.log(arr_nums);
console.log(arr_names);

let constrainedLengthAndType: [number, number, number][] = [
	[1, 22, 333],
	[55, 666, 7777],
	[99, 1, 55],
	[65, 67, 78]
];

let mixedTypeArr: [string, number][] = [
	["orange", 22],
	["pineapple", 666]
];

console.log(constrainedLengthAndType);
console.log(mixedTypeArr);

// you may declair a custom data type in TypeScript, and then used it anywhere to enforce type checking
type Cat = {
	id: number;
	breed: string;
	name: string;
};

const singleDCatArr: Cat[] = [
	{ id: 1, breed: "scottish fold", name: "pepper" },
	{ id: 2, breed: "ragdoll", name: "cookie" }
];

const multiDCatArr: Cat[][] = [[{ id: 1, breed: "scottish fold", name: "pepper" }], [{ id: 2, breed: "ragdoll", name: "cookie" }]];

console.log(singleDCatArr);
console.log(multiDCatArr);

// read only utility type prevents mutation of the data type it is used on
const arr: Readonly<string[][]> = [
	["bobby", "hadz"],
	[".", "com"]
];
