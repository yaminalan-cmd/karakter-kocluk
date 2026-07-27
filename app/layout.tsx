import "./globals.css";

export const metadata = {
  title: "Karakter Koçluk | Bünyamin Hoca | LGS, YKS, Türkçe ve Edebiyat Özel Ders",
  description:
    "Karakter Koçluk'ta LGS ve YKS hazırlığı, Türkçe özel ders, Türk Dili ve Edebiyatı özel ders, öğrenci koçluğu, hızlı okuma, paragraf soru çözüm teknikleri, yeni nesil paragraf ve yeni nesil soru çözme çalışmaları ile online ve yüz yüze eğitim programları.",

  openGraph: {
    title: "Karakter Koçluk | Bünyamin Hoca",
    description:
      "LGS, YKS, Türkçe özel ders, öğrenci koçluğu, hızlı okuma ve paragraf eğitimleri.",
    url: "https://karakterkocluk.com",
    siteName: "Karakter Koçluk",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/anasayfa.png",
        width: 1200,
        height: 630,
        alt: "Karakter Koçluk - Bünyamin Hoca",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Karakter Koçluk | Bünyamin Hoca",
    description:
      "LGS, YKS, Türkçe özel ders ve öğrenci koçluğu.",
    images: ["/images/anasayfa.png"],
  },
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