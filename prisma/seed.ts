import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const first = await prisma.note.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "First Post",
      content: "Hi this is my first post",
    },
  });
  const second = await prisma.note.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Second Post",
      content: "I am learning Prisma, Next JS, & GraphQL",
    },
  });
  console.log({ first, second });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
