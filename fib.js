// fibs.js

// Iterative version
function fibs(n){
    sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++){
        sequence.push(a);
        const next = a + b;
        a = b;
        b = next;
    }
    return sequence;
}

// Recursive version
function fibsRec(n){
    console.log("This was printed recursively");
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const sequence = fibsRec(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}

// Testing the functions
console.log(fibs(8));      // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8));   // [0, 1, 1, 2, 3, 5, 8, 13]
