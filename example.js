var DL, distance;
DL = require('damerau-levenshtein');

distance = DL();
console.log("Default costs (1):");
console.log("Michael", "Michelle", distance("Michael", "Michelle"));

distance = DL({ insert: 2, remove: 2 });
console.log("Insert cost 2 and remove cost 2:");
console.log("Michael", "Michelle", distance("Michael", "Michelle"));

distance = DL({ transpose: 0.5 });
console.log("Transpose cost 0.5:");
console.log("Michael", "Michelle", distance("Michael", "Michelle"));

distance = DL();
console.log("With transposition activated (default):");
console.log("el", "le", distance("el", "le"));

distance = DL({}, false);
console.log("With transposition deactivated:");
console.log("el", "le", distance("el", "le"));

distance = DL({
    transpose: function (backward, forward) {
        if (backward === 'e') return 0.5;
        else return 1;
    }
});
console.log("With lower cost of transposing e backwards:");
console.log("el", "le", distance("el", "le"));
console.log("le", "el", distance("le", "el"));

distance = DL({
    insert: 1,
    remove: 0.5,
    substitute: 0.8,
    transpose: function (backward, forward) {
        if (backward === 'n') return 0.5;
        else return 1;
    }
});
console.log("A strign", "Another string", distance("A strign", "Another string"));

distance = DL({}, false);
console.log("A strign", "Another string", distance("A strign", "Another string"));
