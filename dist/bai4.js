"use strict";
function getString(str) {
    let unique = "";
    for (let i = 0; i < str.length; i++) {
        if (!unique.includes(str[i])) {
            unique += str[i];
        }
    }
    return unique;
}
let inputString = "banana";
console.log(getString(inputString));
//# sourceMappingURL=bai4.js.map