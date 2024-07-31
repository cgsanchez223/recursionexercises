// splits redundant squares into split squares

function simplify(square) {
    if (square === 0 || square === 1) return square;

    square = square.map(simplify);

    if (Number.isInteger(square[0]) && square.every(q => q === square[0])) return square[0];

    return square;
}

// A simple square
console.log(simplify(0)) // 0

// A split square containing four simple filled squares can be simplified to a simple filled square:
console.log(simplify([1, 1, 1, 1])) // 1

// A split square containing four simple empty squares can be simplified to a simple empty square:
console.log(simplify([0, 0, 0, 0])) // 0

// A split square containing mixed squares cannot be simplified:
console.log(simplify([1, 0, 1, 0])) // [1, 0, 1, 0]

// These can be simplified even when nested:
console.log(simplify([1, 0, 1, [1, 1, 1, 1]])) // [1, 0, 1, 1]

// Simplification should nest, so if we can simplify one split square into a simple square and now an outer split square can be simplified, it should:
console.log(simplify([1, 1, 1, [1, 1, 1, 1]])) // 1
console.log(simplify([[1, 1, 1, 1], [1, 1, 1, 1], 1, 1])) // 1
console.log(simplify([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])) // [1, 0, [1, 0, 1, 1], 1]