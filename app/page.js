"use client";
import localFont from "next/font/local";
import CardsGrid from "@/components/cards-grid";
import Card from "@/components/card";
import Image from "next/image";
import { useEffect, useState } from "react";

const StrawberryDaysFont = localFont({
  src: "../public/fonts/strawberry-days/StrawberryDays.ttf",
});

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default function Home() {
  const [wishlist, setWishlist] = useState({ products: [] });
  useEffect(() => {
    const main = async () => {
      const wishlistData = await getData();
      setWishlist(wishlistData);
    };
    main();
  }, []);

  return (
    <main>
      <section className="flex justify-center ml-auto mr-auto">
        <div className="logo-mobile">
          <Image
            width={1080}
            height={1920}
            src="/baby-shower-logo-mobile.png"
            alt="background invitation"
          />
        </div>
        <div className="logo-desktop"></div>
      </section>
      <p
        className={`${StrawberryDaysFont.className} text-2xl text-white text-center pb-3 px-2`}
      >
        La familia Meza Useche te invita a celebrar nuestro
      </p>
      <h1
        className={`${StrawberryDaysFont.className} text-5xl md:text-7xl lg:text-8xl text-white text-center`}
      >
        Baby Shower
      </h1>
      <div className="max-w-[320px] mx-auto	py-5">
        <div className="baby-shower-date-grid grid grid-cols-3 gap-8 line-through text-white">
          <div className="text-white text-center text-2xl self-center">
            <p>Sábado</p>
          </div>
          <div className="text-white text-center text-2xl self-center">
            <p className={`${StrawberryDaysFont.className} text-5xl`}>24</p>
            <p>Agosto</p>
          </div>
          <div className="text-white text-center text-2xl self-center">
            <p>5pm 🇨🇴</p>
          </div>
        </div>
      </div>
      <p className="py-5 px-7 text-lg text-white lg:text-center">
        Lugar:{" "}
        <a
          className="underline"
          href="https://maps.app.goo.gl/uRzfhcR43fHbfEpF6"
        >
          Cl. 127D #45a-21, Bogotá
        </a>
      </p>
      <p className="py-5 px-7 text-lg text-white lg:text-center">
        <span className="text-rose-600">¡Atencion! 🚨</span>, el evento ha sido{" "}
        <span className="font-bold">cancelado</span> por motivos de salud de la
        madre. <br /> Para nuestros amigos que confirmaron asistencia
        prescencial, les estaremos enviando un detalle que habíamos preparado.
        Gracias a todos por su apoyo y buenos deseos.
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
          {wishlist.products.length > 0 &&
            wishlist.products.map((product) => (
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
