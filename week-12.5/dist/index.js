"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma/src/generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function insertUser(username, pass, email) {
    const response = await prisma.user.create({
        data: {
            username,
            email,
            pass
        }
    });
    console.log(response);
}
insertUser('test', 'test', 'test');
//# sourceMappingURL=index.js.map
console.log(process.env.DATABASE_URL);
