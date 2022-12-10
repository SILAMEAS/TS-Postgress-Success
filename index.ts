import { PrismaClient } from "@prisma/client";
import { create } from "domain";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  // await prisma.user.deleteMany();
  // const user = await prisma.user.updateMany({
  //   where: {
  //     name: "sila",
  //   },
  //   data: {
  //     name: "New-sila",
  //   },
  // });
  const user = await prisma.user.update({
    where: {
      email: "sila@gmail.com",
    },
    data: {
      userPreference: {
        disconnect: true,
      },
    },
  });
  const show = await prisma.user.findMany();
  console.log("===============ALL users");
  console.log(show);
  // const user = await prisma.user.create({
  //   data: {
  //     name: "gola",
  //     email: "SILA@gmail.com7sssa34",
  //     age: 4,
  //     userPreference: {
  //       create: {
  //         emailUpdate: true,
  //       },
  //     },
  //   },
  //   // select: {
  //   //   userPreference: true,
  //   //   name: true,
  //   // },
  // });
  // console.log("Last one user");
  // console.log(user);
  // console.log("All users");
  // const Alluser = await prisma.user.findMany({
  //   where: {
  //     AND: [{ name: { equals: "sila" } }, { age: { lt: 5 } }],
  //     // name: { in: ["bola", "sila"] },
  //   },
  // });
  // console.log(Alluser);
  // console.log("find user");
  //   const findUser = await prisma.user.findUnique({
  //     where: {
  //       id: "476501bb-b204-4d68-a5f3-1d106adec7a7",
  //     },
  //   });
  //   console.log(findUser);
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => await prisma.$disconnect());
