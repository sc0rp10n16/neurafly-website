import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

export const metadata: Metadata = {
  title: "Neurafly",
  description:
    "Discover Neurafly, the cutting-edge flight controller for drones, featuring advanced AI capabilities for enhanced navigation, stability, and performance. Elevate your drone experience with Neurafly's intelligent flight solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}