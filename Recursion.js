// Recursion: When a function calls itself

let func = () => {
    if(/*base case*/) {
        return something;
    } else { // recursive case: calls the function
        func();
    }
}

const factorial = num => {
    if(num === 1) {
        return num;
    }else {
        return num * factorial(num-1);
    }
}

