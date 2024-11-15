import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Middleware Stack 🥞",
  description: "Example use Middleware Stack Example Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
      </head>
      <body className={`container`}>{children}</body>
    </html>
  );
}
