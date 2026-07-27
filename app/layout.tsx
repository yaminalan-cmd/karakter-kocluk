import "./globals.css";

export const metadata = {
  title: "Karakter Koçluk",
  description: "Bünyamin Alan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}