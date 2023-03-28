const maze = [
	[1, 0, 0, 0, 1],
	[1, 1, 0, 0, 1],
	[1, 1, 0, 1, 1],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 0, 1]
];

function PointInMaze(rowIndex, colIndex) {
	this.rowNum = rowIndex;
	this.colNum = colIndex;
	this.above = false;
	this.below = false;
	this.left = false;
	this.right = false;

	this.checkAbove = () => {
		isRowAbove = typeof maze[this.rowNum - 1] == "undefined" ? false : true;
		if (isRowAbove) {
			this.above = maze[this.rowNum - 1][this.colNum] == 0 ? true : false;
		}
	};

	this.checkBelow = () => {
		isRowBelow = typeof maze[this.rowNum + 1] == "undefined" ? false : true;
		if (isRowBelow) {
			this.below = maze[this.rowNum + 1][this.colNum] == 0 ? true : false;
		}
	};
	this.checkLeft = () => {
		isColumnLeft = typeof maze[this.rowNum][this.colNum - 1] == "undefined" ? false : true;
		if (isColumnLeft) {
			this.left = maze[this.rowNum][this.colNum - 1] == 0 ? true : false;
		}
	};
	this.checkRight = () => {
		isColumnRight = typeof maze[this.rowNum][this.colNum + 1] == "undefined" ? false : true;
		if (isColumnRight) {
			this.right = maze[this.rowNum][this.colNum + 1] == 0 ? true : false;
		}
	};

	this.checkAllAdjacent = () => {
		this.checkAbove();
		this.checkBelow();
		this.checkLeft();
		this.checkRight();
	};
}

let smartMaze = [];

const createSmartMaze = maze => {
	// for each row...
	maze.forEach((row, rowIndex) => {
		smartMaze[rowIndex] = [];
		row.forEach((col, colIndex) => {
			newPoint = new PointInMaze(rowIndex, colIndex);
			newPoint.checkAllAdjacent();
			smartMaze[rowIndex].push(newPoint);
		});
	});
	console.log(smartMaze);
	// console.log(smartMaze[0][0]["rowNum"]);
};

createSmartMaze(maze);
