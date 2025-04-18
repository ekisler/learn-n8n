import { montserrat } from "./ui/fonts";
import "@/app/ui/global.css";
import { ConfigProvider } from "antd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ConfigProvider>{children}</ConfigProvider>
        <footer className="py-10 flex justify-center items-center">
          Hecho con ❤️ por Emisael Kisler
        </footer>
      </body>
    </html>
  );
}
