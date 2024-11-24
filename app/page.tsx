import Hero from "@/components/LandingPage/Hero";
import ListingsSection from "@/components/LandingPage/ListingsSection";

export default function Home() {
  return (
    <>
      <main className="size-full overflow-x-hidden font-secondary overflow-hidden">
        <Hero />
        <ListingsSection />
      </main>
    </>
  );
}
