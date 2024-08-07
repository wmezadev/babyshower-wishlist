import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    products: [
      {
        id: "1",
        name: "Kit de limpieza",
        image: "/products/kit-aseo.png",
        isLocked: true,
      },
      {
        id: "1",
        name: "Toalla baño bebé",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Bañera",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Tetero",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Bata de baño bebé",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Pañales de tela",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Pijamas",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Kit de gorritos",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Cambiador Portátil",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Cobija / frazada bebé",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Manta antialérgica para bebé",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Canguro portabebés",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Medias para bebé",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Bodies/Mamelucos para bebé",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Lampara Led Mesa",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
      {
        id: "1",
        name: "Pañalera",
        image: "/mamelucos.jpg",
        isLocked: false,
      },
    ],
  });
}

export async function POST(request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
