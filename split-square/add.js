// add two split squares

function add(s1, s2) {
    if (Number.isInteger(s1) && Number.isInteger(s2)) {
        return s1 | s2;
    }

    if (Array.isArray(s1) && !Array.isArray(s2)) {
        s2 = [s2, s2, s2, s2];
    }

    if (Array.isArray(s2) && !Array.isArray(s1)) {
        s1 = [s1, s1, s1, s1];
    }


    return [
        add(s1[0], s2[0]),
        add(s1[1], s2[1]),
        add(s1[2], s2[2]),
        add(s1[3], s2[3])
    ];
}

// Two simple squares can be added
// let s1 = 0
// let s2 = 1
// console.log(add(s1, s2)); // 1


// A simple square and a split square can be added
// let s1 = 0
// let s2 = [1, 0, 1, 0]
// console.log(add(s1, s2)); // [1, 0, 1, 0]

// Two split squares can be added
// let s1 = [0, 0, 0, 1]
// let s2 = [0, 1, 0, 1]
// console.log(add(s1, s2)); //  [0, 1, 0, 1]

// Nested squares can be added:
// let s1 = [0, [1, 1, 1, [0, 0, 0, 0]], [0, 0, 0, 0], 1]
// let s2 = [1, [1, 0, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]
// console.log(add(s1, s2)); // [1, Array(4), Array(4), 1]
// // // [1, [1, 1, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]

// Unevenly-nested squares can be added:
// let s1 = [0, [1, 1, 1, 0           ], [0, 0, 0, 0], 1]
// let s2 = [1, [1, 0, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]
// console.log(add(s1, s2)); // [1, [1, 1, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]
let s1 = [0, [1, 1, 1, 1                      ], [0, 0, 0, 0], 1]
let s2 = [1, [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]], [1, 0, 1, 0], 1]
console.log(add(s1, s2)); // [1, [1, 1, 1, [1, [1, 1, 1, 1], 1, 1]], [1, 0, 1, 0], 1]
