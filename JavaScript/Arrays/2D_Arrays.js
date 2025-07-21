// 2D Array = Multidimensional array that stores a matrix of data in rows and columns.
// useful in representing games, grids, images and spreadsheets.

const matrix = [[1,2,3],
                [4,5,6],
                [6,7,8,9]];

// console.log(matrix); // prints out the entire constituents of the Array.

// enhanced for loop
for(let row of matrix) {
    // console.log(row); // this prints out all the elements of the 2D Array.
}

for (let row of matrix) {
    const rowString = row.join(' ');
    // console.log(rowString);
}

// matrix[2][0] = 7;
matrix[2].splice(0, 1);

// console.log(matrix[2]);
// console.log(matrix)

for(let row of matrix) {
    let roe = row.join(' ');
    // console.log(roe);
}