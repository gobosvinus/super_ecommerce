import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { products } from "./schema";
import { eq } from "drizzle-orm"; // Импортируем оператор сравнения

export const db = drizzle(process.env.DATABASE_URL!);

export const getProducts = async () => {
  const result = await db.select().from(products);
  return result;
};

export const getProductBy = async (id: number) => {
  const result = await db.select().from(products).where(eq(products.id, id)); // Условие: поле id равно переданному значению
  return result[0]; // Возвращаем первый элемент (один товар)
};
