import { faker } from "@faker-js/faker";
import prisma from "../libs/prismaClient.js";

async function main() {
    console.log("Seeder avviato");

    await prisma.product.deleteMany()
    await prisma.category.deleteMany();

    const categoriesNames = faker.helpers
        .uniqueArray(faker.commerce.department, 5)
        .map((name) => ({ name }));

    await prisma.category.createMany({
        data: categoriesNames
    });

    const categories = await prisma.category.findMany();

    const products = [];
    for (let index = 0; index < 15; index++) {
        products.push({
            title: faker.lorem.sentence({ min: 4, max: 8 }),
            description: faker.lorem.paragraphs({ min: 3, max: 8 }),
            price: Number(faker.commerce.price({ min: 3, max: 5 })),
            isPublic: faker.datatype.boolean(),
            categoryId: faker.helpers.arrayElement(categories).id,
        })
    }

    await prisma.product.createMany({
        data: products
    });
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());