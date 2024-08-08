import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Invitación al Baby shower - Familia Meza Useche",
  description:
    "Acompáñanos el Sábado 24 de Agosto a las 5pm presencial y virtualmente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
