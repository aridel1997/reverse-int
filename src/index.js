module.exports = function reverse(n) {
    if (n < 0) {
        return reverseNumber(-n);
    } else {
        return reverseNumber(n);
    }
    function reverseNumber(n) {
        let array = String(n).split("");
        let str = +array.reverse().join("");
        return (str)
    }
}
