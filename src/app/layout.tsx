"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import Sidebar from "./_components/Sidebar/sideBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideSidebarRoutes = ["/login"];
  const shouldHideSidebar = hideSidebarRoutes.includes(pathname);

  const noPaddingRoutes = ["/login"];
  const hasPadding = !noPaddingRoutes.includes(pathname);

  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>
          FitFusion - Painel de Controle
        </title>
        <meta
          name="description"
          content={
            pathname === "/login"
              ? "Faça login para acessar sua conta."
              : "Bem-vindo ao painel da sua aplicação."
          }
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-row h-screen overflow-auto">
          {!shouldHideSidebar && (
            <div className="flex-shrink-0 overflow-y-hidden">
              <Sidebar />
            </div>
          )}
          <div
            className={`flex-1 ${hasPadding ? "p-[60px]" : ""} overflow-auto`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
