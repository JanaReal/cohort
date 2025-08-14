import { PrismaClient } from "../prisma/src/generated/prisma";
import extension = require("@prisma/client/extension");
const prisma = new PrismaClient();


async function insertUser (username: string, pass: string,email: string){
    const response = await prisma.user.create({
        data:{

            username,
            email,
            pass
        }
    })
    console.log(response);
}

insertUser('test','test','test');