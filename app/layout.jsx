import "./globals.css";
import { Inter } from "next/font/google";
import DrawerAppBar from "@components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={inter.className}>
        <DrawerAppBar/>
        {children}
      </body>
    </>
  );
}