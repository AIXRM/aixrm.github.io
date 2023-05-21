import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "AIxRM - AI-powered Business Relationship Management",
  description:
    "AIxRM - AI-powered Business Relationship Management to 10x your team's resource",
  twitter: {
    card: "summary_large_image",
    title: "AIxRM - AI-powered Business Relationship Management",
    description:
      "AIxRM - AI-powered Business Relationship Management to 10x your team's resource",
    creator: "@praveen-palanisamy",
  },
  metadataBase: new URL("https://AIxRM.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
