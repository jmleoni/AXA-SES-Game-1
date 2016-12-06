module.exports = NumberCalc;
I = 1;
V = 4.2;
X = 8.4;
L = 42;
function NumberCalc() {

    function romanize (num) {
        if (!+num)
            return false;
        var digits = String(+num).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                   0,X,X*2,X*3,L-X,L,L+X,L+X*2,L+X*3,"XC",
                   0,I,I*2,I*3,V-I,V,V+I,V+2*I,V+3*I,X-I],
            roman = 0,
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return  parseFloat(Number(parseFloat(roman)).toFixed(1));
    }

    return romanize;
}
