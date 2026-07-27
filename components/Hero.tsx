"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Arka Plan */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Sol Taraf */}
          <div>

            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-300">
              TÜRKÇE • LGS • TYT • YKS • ÖĞRENCİ KOÇLUĞU
            </span>

            <h2 className="mt-8 text-xl font-medium text-slate-300">
              BünYamin Hoca
            </h2>

            <h1 className="mt-3 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              KARAKTER
              <br />
              <span className="text-cyan-400">KOÇLUK</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              18 yıllık eğitim deneyimiyle; ilkokul, ortaokul ve lise
              öğrencilerine yönelik Türkçe, Türk Dili ve Edebiyatı,
              LGS-YKS hazırlık, Paragraf Çalışmaları, Hızlı Okuma ve
              Öğrenci Koçluğu ile öğrencimize destek çalışmaları sunuyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#iletisim"
                className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold transition hover:bg-cyan-400"
              >
                Eğitim Planlama Çalışmaları
              </Link>

              <Link
                href="#egitimler"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
              >
                ÖĞRENCİ KOÇLUĞU PLANLAMA
              </Link>

            </div>

            {/* Rozetler */}

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                📘 LGS Hazırlık
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                🎓 TYT & YKS Türkçe
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                🚀 Öğrenci Koçluğu
              </span>

            </div>

            {/* İstatistikler */}

            <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">

              {[
                ["19+", "Yıl Deneyim"],
                ["1200+", "Öğrenci"],
                ["5000+", "Soru Analizi"],
                ["%96", "Memnuniyet"],
              ].map(([value, title]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="text-3xl font-black text-cyan-400">
                    {value}
                  </div>

                  <div className="mt-2 text-sm text-slate-300">
                    {title}
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Sağ Taraf */}

          <div className="relative flex justify-center">

            <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">

              <Image
                src="/images/anasayfa.png"
                alt="Bünyamin Alan"
                width={700}
                height={850}
                priority
                className="rounded-[28px] object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}