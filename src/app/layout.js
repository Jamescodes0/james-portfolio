<<<<<<< HEAD
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};
=======
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}
>>>>>>> 52f586144dafb62c071571e2d71dfda76e45b5c8

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
=======
      <body className={inter.className}>{children}</body>
    </html>
  )
}
>>>>>>> 52f586144dafb62c071571e2d71dfda76e45b5c8
