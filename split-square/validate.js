// Is this a valid split square?

function validate(square) {
    if (square === 0 || square === 1) {
        return true;
    }

    if (Array.isArray(square) && square.length === 4) {
        return square.every(validate);
    }
    return false;
}
// Simple Square
console.log(validate(0)); // true

// A split square of four simple filled squares
console.log(validate([1, 1, 1, 1])) // true

// can nest split and simple squares;
console.log(validate([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])); // true
console.log(validate([1,
    [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]],
    [1, 0, 1, 0],
    1])); // true

// Simple square must be either empty (0) or filled (1)
console.log(validate(2)); // false

// Split squares must contain exactly four parts:
console.log(validate([1, 1, 1, 1, 1])); // false
console.log(validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1])); // false
console.log(validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])); // false