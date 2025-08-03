"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/generated/prisma/index");
const prisma = new index_1.PrismaClient();
async function insertUser(email, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    });
    console.log(res);
}
async function updateUser(username, { firstName, lastName }) {
    const res = await prisma.user.update({
        where: {
            email: username
        },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);
}
//insertUser("debanjan","0412","d","j");
updateUser("debanjan", { firstName: "", lastName: "" });
//# sourceMappingURL=index.js.map