import "./globals.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="flex-1 p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
