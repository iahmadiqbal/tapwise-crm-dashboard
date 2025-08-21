import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "../components/ClientShell";

export const metadata: Metadata = {
  title: "Tapwise Dashboard",
  description: "NFC CRM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
