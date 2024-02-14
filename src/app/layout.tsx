import { Layout } from "@/components/layout";
import "./globals.css";
import { Providers } from "./providers";

// body className is for background color principal (the most darked color)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full antialiased">
      <link
        rel="icon"
        href="https://raw.githubusercontent.com/mahg0899/mahg0899.github.io/main/img/favicon.ico"
      />
      <body className="flex h-full bg-gray-200 dark:bg-slate-950">
        <div className="flex w-full">
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </div>
      </body>
    </html>
  );
}
