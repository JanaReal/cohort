"use strict";
function isLegal(a) {
    if (a >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let value = isLegal(12);
console.log(value);
