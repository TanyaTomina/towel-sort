module.exports = function towelSort (matrix) {
    let newArray = [];
    if (matrix === undefined) {
        return [];
    } else {
        for(let i = 0; i < matrix.length; i++) {

            if(i%2 == 0) {
                matrix[i] = matrix[i].sort(function(a, b) {
                    return a - b;
                });

            } else {
                matrix[i] = matrix[i].sort(function(a, b) {
                    return b - a;
                });

            }

            for(let j = 0; j < matrix[i].length; j++) {
                newArray.push(matrix[i][j]);
            }
        }
        return newArray;
    }
}
