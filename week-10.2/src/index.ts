import { PrismaClient } from '../src/generated/prisma/index';
const prisma = new PrismaClient();


async function insertUser(email: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        email,
        password,
        firstName,
        lastName
    }
  })
  console.log(res);
}



interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res =await prisma.user.update({
    where:{
        email: username
    },
    data: {
        firstName,
        lastName
    }
  })
  console.log(res);
}


//insertUser("debanjan","0412","d","j");
updateUser("debanjan",{firstName:"",lastName:""});