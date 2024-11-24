import { db } from "../index";
import { products } from "../schema";

async function seedProducts() {
  const randomPhoto = (id: number) =>
    `https://picsum.photos/seed/${id}/400/300`; // Заглушка для случайных фото

  await db.insert(products).values([
    {
      name: "iPad 16",
      price: 69999,
      stock: 10,
      description: "Apple iPad 16GB, Retina Display, WiFi only.",
      image: randomPhoto(1),
    },
    {
      name: "MacBook Air M2",
      price: 119999,
      stock: 5,
      description: "Apple MacBook Air with M2 chip, 8GB RAM, 256GB SSD.",
      image: randomPhoto(2),
    },
    {
      name: "iPhone 14 Pro",
      price: 129999,
      stock: 8,
      description: "Apple iPhone 14 Pro with 128GB storage, 48MP camera.",
      image: randomPhoto(3),
    },
    {
      name: "Samsung Galaxy S23 Ultra",
      price: 124999,
      stock: 7,
      description: "Samsung flagship smartphone, 12GB RAM, 256GB storage.",
      image: randomPhoto(4),
    },
    {
      name: "Sony WH-1000XM5",
      price: 34999,
      stock: 15,
      description: "Premium noise-cancelling wireless headphones by Sony.",
      image: randomPhoto(5),
    },
    {
      name: "Lenovo ThinkPad X1 Carbon",
      price: 154999,
      stock: 4,
      description: "Business laptop with Intel Core i7, 16GB RAM, 512GB SSD.",
      image: randomPhoto(6),
    },
    {
      name: "Amazon Echo Dot 5th Gen",
      price: 4999,
      stock: 25,
      description: "Smart speaker with Alexa, compact and powerful.",
      image: randomPhoto(7),
    },
    {
      name: "GoPro Hero 11",
      price: 39999,
      stock: 6,
      description: "Action camera with 5.3K video recording.",
      image: randomPhoto(8),
    },
    {
      name: "Dell XPS 15",
      price: 179999,
      stock: 3,
      description: "High-end laptop with 16GB RAM, 512GB SSD, 4K display.",
      image: randomPhoto(9),
    },
    {
      name: "Razer DeathAdder V2",
      price: 5999,
      stock: 20,
      description: "Ergonomic gaming mouse with customizable RGB lighting.",
      image: randomPhoto(10),
    },
    {
      name: "Apple Watch Series 8",
      price: 45999,
      stock: 12,
      description: "Smartwatch with health tracking and cellular support.",
      image: randomPhoto(11),
    },
    {
      name: "JBL Flip 6",
      price: 10999,
      stock: 18,
      description: "Portable Bluetooth speaker with IP67 water resistance.",
      image: randomPhoto(12),
    },
    {
      name: "Samsung Galaxy Tab S8",
      price: 84999,
      stock: 9,
      description: "Premium Android tablet with 11-inch display.",
      image: randomPhoto(13),
    },
    {
      name: "Nikon Z6 II",
      price: 219999,
      stock: 2,
      description: "Mirrorless camera with 24.5MP sensor and 4K video.",
      image: randomPhoto(14),
    },
    {
      name: "Microsoft Surface Pro 9",
      price: 119999,
      stock: 6,
      description: "2-in-1 detachable laptop with 13-inch touchscreen.",
      image: randomPhoto(15),
    },
    {
      name: "HyperX Cloud II",
      price: 7999,
      stock: 25,
      description: "Comfortable gaming headset with 7.1 surround sound.",
      image: randomPhoto(16),
    },
    {
      name: "LG OLED C1 TV",
      price: 249999,
      stock: 2,
      description: "55-inch OLED 4K Smart TV with Dolby Vision and Atmos.",
      image: randomPhoto(17),
    },
    {
      name: "Corsair K70 RGB",
      price: 14999,
      stock: 10,
      description: "Mechanical gaming keyboard with Cherry MX switches.",
      image: randomPhoto(18),
    },
    {
      name: "Anker PowerCore 20,000mAh",
      price: 3999,
      stock: 30,
      description: "High-capacity power bank with fast charging support.",
      image: randomPhoto(19),
    },
    {
      name: "Sony Alpha A7 IV",
      price: 259999,
      stock: 3,
      description: "Full-frame mirrorless camera with advanced features.",
      image: randomPhoto(20),
    },
    {
      name: "Philips Hue Smart Bulb",
      price: 2999,
      stock: 40,
      description: "Smart LED bulb with app and voice control.",
      image: randomPhoto(21),
    },
    {
      name: "DJI Mini 3 Pro",
      price: 84999,
      stock: 5,
      description:
        "Lightweight drone with 4K HDR video and 34-minute flight time.",
      image: randomPhoto(22),
    },
    {
      name: "Google Nest Hub 2nd Gen",
      price: 7999,
      stock: 12,
      description: "Smart display with Google Assistant, 7-inch screen.",
      image: randomPhoto(23),
    },
    {
      name: "Seagate Portable HDD 2TB",
      price: 5999,
      stock: 15,
      description: "External hard drive for backups and file storage.",
      image: randomPhoto(24),
    },
    {
      name: "Canon PIXMA G6020",
      price: 19999,
      stock: 8,
      description: "All-in-one inkjet printer with wireless printing support.",
      image: randomPhoto(25),
    },
  ]);

  console.log("Seeding complete");
}

seedProducts().catch((error) => console.log(error));
