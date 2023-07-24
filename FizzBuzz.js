for (let i = 1; i < 101; i++) {
    const printText = [];

    if(isDivisible(i, 3)) {
        printText.push("Fizz");
    }

    if (isDivisible(i, 5)) {
        printText.push("Buzz");
    }

    if (isDivisible(i, 7)) {
        printText.push("Bang");
    }

    if (printText.length === 0) {
        printText.push(i);
    }
    
    console.log(printText.join(""));
}

function isDivisible (i, num) {
    return (i % num === 0);
}