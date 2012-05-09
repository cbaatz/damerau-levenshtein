Damerau-Levenshtein
===================

This is an implementation of the
[Damerau-Levenshtein](http://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance)
edit distance in JavaScript (1.6). It lacks tests. It has not been
optimised for speed.

It supports custom cost functions for insert, remove, substitute, and
transpose, either as constants or functions parameterised by the
characters involved. For example:

    var DL = require('damerau-levenshtein');
    var distance = DL({
        insert: 1,
        remove: 0.5,
        substitute: 0.8,
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
