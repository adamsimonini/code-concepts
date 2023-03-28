let perStudentPetCount = [0, 1, 0, 2, 1, 1, 4, 0, 0, 0, 3, 2, 1, 3, 0, 2, 2, 4];

var numOfStudents = perStudentPetCount.length;

// with typescript, we can constrain the parameter types, as well as the function return type
const sumOfPets = perStudentPetCount.reduce((sum: number, num: number): number => {
	return sum + num;
});

let averagePetNum = Math.round(sumOfPets / numOfStudents);

let apple = "apple";

// should return sumOfPets / numOfStudents
console.log(averagePetNum);
