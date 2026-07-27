import "./globals.css";

export const metadata = {
  title: "Karakter Koçluk | LGS, YKS ve Türkçe Özel Ders | Bünyamin Hoca",
  description:
    "Karakter Koçluk'ta LGS ve YKS hazırlığı, Türkçe özel ders, Türk Dili ve Edebiyatı özel ders, öğrenci koçluğu, hızlı okuma, paragraf soru çözüm teknikleri, yeni nesil paragraf ve yeni nesil soru çözme çalışmaları ile online ve yüz yüze eğitim programları sunulmaktadır.",
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