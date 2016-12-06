module.exports = NumberCalc;

function NumberCalc() {

    function isNumeric(obj) {
        // parseFloat NaNs numeric-cast false positives (null|true|false|"")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        // adding 1 corrects loss of precision from parseFloat (#15100)
        return !Array.isArray(obj) && (obj - parseFloat(obj) + 1) >= 0;
    }
    function isInteger(obj) {
        return isNumeric(obj) && obj.indexOf('.') < 0;
    }

    function calcNumber(values) {
        return values;
    }

    return calcNumber;
}