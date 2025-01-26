import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

// div className whit the background color is for the content on the page.

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-slate-50 ring-1 ring-zinc-100 dark:bg-slate-900 dark:ring-zinc-100/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Analytics />
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};
