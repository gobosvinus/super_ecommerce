import {
  pgTable,
  integer,
  varchar,
  text,
  date,
  primaryKey,
  foreignKey,
} from "drizzle-orm/pg-core";

// Таблица пользователей
export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }),
  surname: varchar({ length: 255 }), // Фамилия
  nickname: varchar({ length: 50 }).unique(), // Никнейм
  age: integer(),
  email: varchar({ length: 255 }).notNull().unique(),
  avatar: varchar({ length: 255 }), // URL аватара
  birthDate: date(), // Дата рождения
  passwordHash: varchar({ length: 255 }).notNull(), // Хэш пароля
});

// Таблица отзывов
export const reviews = pgTable("reviews", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer()
    .notNull()
    .references(() => users.id), // Связь с пользователем
  productId: integer().notNull(), // Идентификатор товара
  reviewText: text().notNull(), // Текст отзыва
  rating: integer().notNull(), // Рейтинг (например, от 1 до 5)
  createdAt: date().defaultNow(), // Дата создания отзыва
});

// Таблица активных заказов
export const activeOrders = pgTable("active_orders", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer()
    .notNull()
    .references(() => users.id), // Связь с пользователем
  orderDetails: text().notNull(), // Детали заказа
  createdAt: date().defaultNow(), // Дата создания заказа
});

// Таблица выполненных заказов
export const completedOrders = pgTable("completed_orders", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer()
    .notNull()
    .references(() => users.id), // Связь с пользователем
  orderDetails: text().notNull(), // Детали заказа
  completedAt: date().defaultNow(), // Дата завершения заказа
});

// Товары
export const products = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(), // Уникальный идентификатор товара
  name: varchar({ length: 255 }).notNull(), // Название товара
  price: integer().notNull(), // Цена товара (в копейках или минимальной единице валюты)
  stock: integer().notNull().default(0), // Количество товара в наличии
  description: text(), // Описание товара
  createdAt: date().defaultNow(), // Дата добавления товара
  image: varchar({ length: 255 }), // URL изображения товара
});

// Корзина
export const cart = pgTable("cart", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(), // Уникальный идентификатор записи корзины
  userId: integer()
    .notNull()
    .references(() => users.id), // Связь с пользователем
  productId: integer()
    .notNull()
    .references(() => products.id), // Связь с товаром
  quantity: integer().notNull().default(1), // Количество товара в корзине
  createdAt: date().defaultNow(), // Дата добавления товара в корзину
});
