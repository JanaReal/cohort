"use strict";
function runAfter2Sec(fn) {
    setInterval(fn, 2000);
}
runAfter2Sec(() => {
    console.log("hi");
});
