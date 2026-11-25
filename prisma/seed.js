import { faker } from "@faker-js/faker";
import prisma from "../libs/prismaClient.js";

async function main() {
    console.log("Seeder avviato");

    const categoriesNames = faker.helpers
        .uniqueArray(faker.commerce.department, 5)
        .map((name) => ({ name }));

    await prisma.category.createMany({
        data: categoriesNames
    });

    const categories = await prisma.category.findMany();
    console.log(categories);
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());