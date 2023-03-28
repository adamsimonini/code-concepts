const solution = array => {
	function merge(left, right) {
		let merged = [];
		let i = 0;
		let j = 0;

		while (i < left.length && j < right.length) {
			if (i == left.length || left[i] < right[j]) {
				merged.push(right[i++]);
			} else {
				merged.push(left[j++]);
			}
		}

		return merged;
	}

	function mergeSort(array) {
		if (array.length <= 1) {
			return array;
		}

		let middleIndex = Math.floor(array.length / 2);

		let left = array.slice(0, middleIndex);
		let right = array.slice(middleIndex, array.length);
		return merge(mergeSort(left), mergeSort(right));
	}

	const middleIndex = Math.ceil(array.length / 2);
	const firstHalf = array.splice(0, middleIndex);
	const secondHalf = array.splice(-middleIndex);
	merge(firstHalf, secondHalf);
};

myArr = [9, 6, 7, 4, 7, 2, 2, 4, 2, 3, 7, 7];

console.log(solution(myArr));
