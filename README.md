Damerau-Levenshtein
===================

This is an implementation of the optimal string alignment (restricted)
version of the
[Damerau-Levenshtein](http://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance)
edit distance algorithm in JavaScript (1.6). It lacks tests. It has
not been optimised for speed. It calculates the minimal edit cost of
turning the first string into the second (the order matters when costs
are asymmetric).

Install with [npm](http://npmjs.org/):

    npm install git://github.com/cbaatz/damerau-levenshtein.git

Quick test from command line:

    node -e "console.log(require('damerau-levenshtein')()('hello', 'world'));"

It supports specifying custom costs for insertions, removals,
substitutions, and transpositions, either as constants or functions
parameterised by the characters involved. For example:

    var DL = require('damerau-levenshtein');
    var distance = DL({
        insert: 1,
        remove: 0.5,
        substitute: function (from, to) {
            if (from === 'a') return 0.8;
            else return 1;
        },
        transpose: function (backward, forward) {
            if (backward === 'n') return 0.5;
            else return 1;
        }
    });
    console.log("A strign", "Another string", distance("A strign", "Another string"));

You can also turn off the (Damerau) transposition to get a standard
Levenshtein distance:

    var DL = require('damerau-levenshtein');
    var distance = DL({}, false);
    console.log("A strign", "Another string", distance("A strign", "Another string"));

[UNLICENSED](http://unlicense.org/)
