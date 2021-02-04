module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix != null && !!matrix.length) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (let e of matrix[i]) {
                    arr.push(e);
                }
            } else {
                for (let g of matrix[i].reverse()) {
                    arr.push(g);
                }
            }
        }
    }
    return arr;
};
