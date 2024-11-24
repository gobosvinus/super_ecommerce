import ProductCard from "@/components/LandingPage/ProductCard";
import { getProductBy } from "@/db";

export default async function Home({ params }: { params: { id: number } }) {
  // подтягиваем из бд по айди нужный товар на сервере
  const { id } = params;

  const product = await getProductBy(id);
  if (!product) return;

  const { name, price, description, image } = product;
  const props = { name, price, description, image, id };

  return (
    <>
      <main className="h-screen w-full overflow-x-hidden font-secondary grid place-items-center">
        <div className="w-[350px] h-[600px]">
          <ProductCard {...props} />
        </div>
      </main>
    </>
  );
}
