"use strict";
function isLegal(user) {
    if (user.age > 18)
        console.log("adult");
    else
        console.log("kid");
}
isLegal({
    firstname: "debanjan",
    lastname: "jana",
    age: 15
});
