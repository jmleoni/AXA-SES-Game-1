module.exports = AgeRisk;

function AgeRisk() {

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

    function calcAgeRisk(values) {
        var sum = 0.0
        var nofAdults = 0
        var nofYoungAdult = 0
        var nofKids = 0
        for (var i = 0; i < values.length; i++) {
            var age = values[i];
            if (!isNumeric(age)) {
                throw new Error("age "+age+" is not an integer");
            }
            if (age < 18) {
                sum = sum + 1.1
                nofKids = nofKids + 1
            } else if (age >= 18 && age <= 24) {
                sum = sum + 0.9
                nofAdults = nofAdults + 1
                nofYoungAdult = nofYoungAdult + 1
            } else if (age >= 25 && age <= 65) {
                sum = sum + 1.0
                nofAdults = nofAdults + 1
            } else if (age >= 66) {
                sum = sum + 1.5
                nofAdults = nofAdults + 1
            }
        }
        if (nofYoungAdult == 2 && nofKids == 0 & nofAdults == 2) {
            console.log("apply young couples. adults="+nofAdults+", kids="+nofKids+", young couple="+nofYoungAdult)
            sum = sum * 0.9
        }

        if (nofAdults >= 2 && nofKids >= 2) {
            console.log("apply family pack. adults="+nofAdults+", kids="+nofKids+", young couple="+nofYoungAdult)
            sum = sum * 0.8
        }
        if (nofAdults < nofKids ) {
            console.log("apply kids > adults penalty. adults="+nofAdults+", kids="+nofKids+", young couple="+nofYoungAdult)
            sum = sum * 1.15
        }

        return sum;
    }

    return calcAgeRisk;
}