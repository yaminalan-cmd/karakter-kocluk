export default function Success() {
  const stats = [
    {
      number: "19+",
      title: "Yıllık Eğitim Deneyimi",
    },
    {
      number: "1200+",
      title: "Mutlu Öğrenci",
    },
    {
      number: "%98",
      title: "Veli Memnuniyeti",
    },
    {
      number: "50000+",
      title: "Çözülen Yeni Nesil Soru",
    },
  ];

  return (
    <section id="success" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[5px] text-red-500">
            BAŞARILAR
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Rakamlarla Karakter Koçluk
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Yılların tecrübesi ve yüzlerce öğrencinin başarısı ile
            oluşturulan eğitim sistemi.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur"
            >

              <h3 className="text-5xl font-black text-red-500">
                {item.number}
              </h3>

              <p className="mt-4 text-lg text-slate-300">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}