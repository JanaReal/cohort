interface User{
    firstname: string,
    lastname: string,
    age: number
}

function isLegal(user : User){
    if(user.age > 18) console.log("adult")
    else console.log("kid") 
}

isLegal({
    firstname:"debanjan",
    lastname: "jana",
    age: 15
})