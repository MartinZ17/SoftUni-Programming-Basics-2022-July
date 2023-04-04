function pyramid(input) {
    let n = input[0];

    let current = 1;
    let isBigger = false;
    let buff = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            buff += current + " ";
            current++;
        }

        console.log(buff);
        buff = "";
        if (isBigger) {
            break;
        }
    }

}

pyramid(["7"])