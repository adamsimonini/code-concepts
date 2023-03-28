let dinnerChoices = [
	["salad", "soup", "cheese"],
	["chicken", "salmon", " pizza"]
];

let appIndex = 0;
let mainDishIndex = 1;

let firstApp = dinnerChoices[appIndex][0];
let secondApp = dinnerChoices[appIndex][1];

console.log(firstApp);
dinnerChoices[mainDishIndex][0] = "Steak";

console.log(dinnerChoices);
