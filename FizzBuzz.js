for (let i = 1; i < 101; i++) {
    const printText = [];

    if(i % 3 === 0) {
        printText.push("Fizz");
    }

    if (i % 5 === 0) {
        printText.push("Buzz");
    }

    if (printText.length === 0) {
        printText.push(i);
    }
    
    console.log(printText.join(""));
}