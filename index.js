'use strict';

// Code credit to ThiefMaster
// https://stackoverflow.com/questions/6466418/is-there-a-good-javascript-snippet-anyone-knows-for-formatting-abbreviated-num

function is_numeric(string) {
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) < '0' || string.charAt(i) > '9') {
            return false;
        }
    }
    return true;
}

function charValueMultiplier(letter, options) {
    if (letter.toLowerCase()===options.symbols.trillion.toLowerCase())
    {
        return 1000^4;
    }
    if (letter.toLowerCase()===options.symbols.billion.toLowerCase())
    {
        return Math.pow(1000,3);
    }
    if (letter.toLowerCase()===options.symbols.million.toLowerCase())
    {
        return Math.pow(1000,2);
    }
    if (letter.toLowerCase()===options.symbols.kilo.toLowerCase())
    {
        return Math.pow(1000,1);
    }
    return 0
}

// parse string like 1.5M or 10k and return the number
module.exports = function (string, options) {
    if (!options)
    {
        options = {
            "symbols" : {
                "kilo" : "K",
                "million" : "M",
                "billion" : "B",
                "trillion" : "T"
            },
            "separators" : {
                "thousand" : ",",
                "decimal" : "."
            }
        }
    }
    string = string.replace(/ /, ' '); // remove spaces
    var total = 0;
    var partial = 0;
    var partialFraction = 0;
    var fractionLength = 0;
    var isFraction = false;

    // process the string; update total if we find a unit character
    for (var i = 0; i < string.length; i++) {
        var c = string.substr(i, 1);
        if (c === options.separators.decimal || c === options.separators.thousand) {
            isFraction = true;
        }
        else if (is_numeric(c)) {
            if (isFraction) {
                partialFraction = partialFraction * 10 + parseInt(c, 10);
                fractionLength++;
            }
            else {
                partial = partial * 10 + parseInt(c, 10);
            }
        }
        else {
            total += charValueMultiplier(c,options) * partial +
                charValueMultiplier(c,options) * partialFraction / Math.pow(10, fractionLength);

            partial = 0;
            partialFraction = 0;
            fractionLength = 0;
            isFraction = false;
        }
    }



    return Math.round(total + partial + partialFraction / Math.pow(10, fractionLength));
};