import { db } from "../index";
import { users } from "../schema";

async function seed() {
  await db.insert(users).values({
    name: "John Doe",
    email: "john@example2.com",
    age: 25,
    passwordHash: "asfasdfsdf324",
  });
  console.log("Seeding complete");
}

seed().catch((error) => console.log(error));
