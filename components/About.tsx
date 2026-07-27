"use client";

import Image from "next/image";

const stats = [
  { value: "19+", label: "Yıllık Deneyim" },
  { value: "1200+", label: "Öğrenci" },
  { value: "50000+", label: "Soru Analizi" },
  { value: "%98", label: "Memnuniyet" },
];

const features = [
  "📘 LGS Hazırlık",
  "🎓 TYT & YKS Türkçe",
  "🚀 Öğrenci Koçluğu",
  "📖 Hızlı Okuma",
  "🧠 Paragraf Uzmanlığı",
  "🎯 Yeni Nesil Sorular",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* FOTOĞRAF */}
        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-cyan-400/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur">
            <Image
              src="/images/HERO.png"
              alt="Bünyamin Alan"
              width={900}
              height={1000}
              className="rounded-[24px] object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* YAZILAR */}
        <div>

          <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            HAKKIMDA
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Eğitimi Sadece
            <span className="text-cyan-400"> Ders Anlatmak </span>
            Olarak Görmüyorum.
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            Ben Bünyamin Alan. Yaklaşık <strong>19 yıldır</strong> öğrencilerin
            akademik gelişimine rehberlik ediyorum.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Türkçe ve Türk Dili Edebiyatı derslerinin yanında; okuma alışkanlığı,
            paragraf çözüm teknikleri, dikkat geliştirme, sınav stratejileri,
            öğrenci koçluğu ve verimli çalışma becerileri üzerine çalışıyorum.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Hedefim yalnızca sınav başarısı değil; disiplinli, planlı ve özgüveni
            yüksek bireyler yetiştirmek.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">

            {features.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                {item}
              </div>
            ))}

          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="text-3xl font-black text-cyan-400">
                  {item.value}
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  {item.label}
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}