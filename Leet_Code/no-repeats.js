const solution = n => {
	let longestLength = 0;
	let currentLength = 0;
	let duplicateCheck = [];
	numArray = String(n).split("").map(Number);
	for (let i = 0; i < numArray.length; i++) {
		let currentNum = numArray[i];
		if (duplicateCheck.includes(currentNum)) {
			console.log(`duplicate hit: ${currentNum}`);
			// resetting current length to one, as we hit a duplicate and we count that duplicate as the first in a potential new, longest sequence
			currentLength = 1;
			// resetting duplicateCheck, because we have started checking a new sequence
			duplicateCheck = [currentNum];
		} else {
			console.log(currentNum);
			// no duplicate means add to current length
			currentLength++;
			// possibly replace longest with current if required
			if (currentLength > longestLength) {
				longestLength = currentLength;
			}
			duplicateCheck.push(currentNum);
		}
	}

	return longestLength;
};

console.log(`My answer: ${solution(1012345678910)}`);
