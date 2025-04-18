import { montserrat } from "./ui/fonts"
import "@/app/ui/global.css";
import { ConfigProvider } from 'antd'; 
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <DefaultSeo {...SEO} />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <ConfigProvider>
        {children}
        </ConfigProvider>
        <footer className="py-10 flex justify-center items-center">
          Hecho con ❤️ por Emisael Kisler
        </footer> 
      </body>
    </html>
  );
}
