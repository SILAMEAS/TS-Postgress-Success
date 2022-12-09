import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: { name: "sola", email: "silas@gmail.com", age: 23 },
  // });
  // console.log(user);
  const Alluser = await prisma.user.findMany();
  console.log(Alluser);
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => await prisma.$disconnect());
