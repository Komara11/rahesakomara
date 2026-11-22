import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Rahesa Komara",
  description: "Portfolio of Rahesa Komara, an AI-Driven Developer crafting modern websites and high-performance digital experiences powered by Artificial Intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${jakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#080e14] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
