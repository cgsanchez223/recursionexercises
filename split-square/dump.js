function dump(square) {
    if (square === 0 || square === 1) {
        return square.toString();
    } else {
        return square.map(dump).join(" ");
    }
}
console.log(dump([0, 1, 0, 1])) // 0 1 0 1
console.log(dump([0, 0, 0, [1, 1, 1, 1]])) // 0 0 0 1 1 1 1
console.log(dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])) // 0 0 0 1 1 1 0 0 0 1 1 1 1