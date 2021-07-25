module.exports = function toReadable(number) {
    return actuallFunction(number);
}

function actuallFunction(number) {
    if (number == 0) {
        return "zero";
    }

    const units = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    }

    const dozens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    }

    if (units[number] !== undefined) {
        return units[number];
    } else if (dozens[number] !== undefined) {
        return dozens[number];
    }

    if (number >= 100) {
        return actuallFunction(Math.floor(number / 100)) + " hundred" + ((number % 100 !== 0) ? " " + actuallFunction(number % 100) : "");
    }

    for (let dozen in dozens) {
        if ((number - number % 10) / dozen === 1) {
            return dozens[dozen] + ((number % dozen !== 0) ? " " + actuallFunction(number % dozen) : "");
        }
    }
}