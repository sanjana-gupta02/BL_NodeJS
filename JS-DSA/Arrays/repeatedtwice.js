function findRepeatedDigitNumbers(range) {
    let repeatedDigits = [];
    for (let i = 0; i <= range; i++) {
        let strNum = i.toString();
        if (strNum.length === 2 && strNum[0] === strNum[1]) {
            repeatedDigits.push(i);
        }
    }
    return repeatedDigits;
}
