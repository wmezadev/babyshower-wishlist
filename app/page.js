import CardsGrid from "@/components/cards-grid";
import Card from "@/components/card";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`, {
    next: { revalidate: 0 }
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Home() {
  const wishlist = await getData();

  return (
    <main>
      <section className="flex justify-center ml-auto mr-auto">
        <Image
          width={899}
          height={1599}
          src="/invitation-background.jpeg"
          alt="background invitation"
        />
      </section>
      <p className="py-5 px-7 text-lg text-white lg:text-center">
        Transmitiremos en vivo el babyshower para nuestros amigos y familiares
        en el exterior.
      </p>
      <section>
        <div className="pt-5 px-7 text-white lg:text-center">
          <h2 className="text-4xl pb-2">Lista de ideas de regalos</h2>
          <p className="text-lg">
            Puedes ver, elegir y reservar un regalo de forma anónima o traer
            cualquier otro presente.
          </p>
        </div>
        <CardsGrid>
          {wishlist.products.map((product) => (
            <Card
              id={product.id}
              image={product.image}
              key={product.id}
              name={product.name}
              defaultIsLocked={product.is_locked}
              availableQuantity={Number(product.available_quantity)}
              defaultLockedQuantity={Number(product.locked_quantity)}
            />
          ))}
        </CardsGrid>
      </section>
    </main>
  );
}
