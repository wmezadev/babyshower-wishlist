import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Invitación al Babyshower - Familia Meza Useche",
  description:
    "Este es nuestro Babyshower para nuestro bebé para 4 de agosto del 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
