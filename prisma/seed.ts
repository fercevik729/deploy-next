import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const first = await prisma.task.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "First task: learn Next.JS",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  const second = await prisma.task.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Second Task: learn GraphQL",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  const third = await prisma.task.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "Third Task: learn AWS",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ first, second, third });
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
