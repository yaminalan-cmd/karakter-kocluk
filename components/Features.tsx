export default function Features() {
  const features = [
    {
      title: "LGS Hazırlık",
      text: "Yeni nesil soru mantığını kavratan, düzenli takip sistemiyle başarı odaklı eğitim.",
      icon: "🎯",
    },
    {
      title: "YKS Türkçe",
      text: "Paragraf, dil bilgisi ve hız teknikleriyle sınav performansını yükselten program.",
      icon: "📚",
    },
    {
      title: "Okuma Alışkanlığı",
      text: "Kitap okuma kültürü kazandıran ve anlamayı güçlendiren özel çalışmalar.",
      icon: "📖",
    },
    {
      title: "Eğitim Koçluğu",
      text: "Öğrenciye özel planlama, motivasyon ve hedef takibi.",
      icon: "🚀",
    },
    {
      title: "Veli İş Birliği",
      text: "Düzenli geri bildirimlerle öğrencinin gelişimi birlikte takip edilir.",
      icon: "🤝",
    },
    {
      title: "Online & Yüz Yüze",
      text: "Türkiye'nin her yerinden kaliteli eğitim imkânı.",
      icon: "💻",
    },
  ];

  return (
    <section id="features" className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[5px] text-red-600">
            KARAKTER KOÇLUK
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Neden Karakter Koçluk?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Akademik başarıyı karakter gelişimiyle birlikte ele alan,
            öğrenciyi merkeze koyan modern eğitim modeli.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-4xl transition group-hover:bg-red-600 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}