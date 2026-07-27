// Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
<section id="anasayfa" className="relative overflow-hidden bg-slate-950 text-white">
<div className="absolute inset-0">
<div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
<div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[140px]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.08),transparent_45%)]" />
</div>

<div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
<div className="grid w-full items-center gap-16 lg:grid-cols-2">

<div>

<div className="inline-flex items-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 shadow-[0_0_30px_rgba(34,211,238,.25)] backdrop-blur-xl">
<span className="text-xl font-extrabold tracking-[0.25em] text-cyan-300">
                TÜRKÇE • LGS • TYT • YKS • ÖĞRENCİ KOÇLUĞU
</span>
</div>

<div className="mt-8 inline-flex rounded-2xl border border-cyan-300/30 bg-white/5 px-6 py-3 shadow-xl backdrop-blur-xl">
<span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-2xl font-black uppercase tracking-[0.25em] text-transparent">
                BÜNYAMİN HOCA
</span>
</div>

<h1 className="mt-8 leading-none">
<span className="block bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-6xl font-black tracking-tight text-transparent drop-shadow-[0_10px_25px_rgba(255,255,255,.18)] lg:text-8xl">
                KARAKTER
</span>
<span className="block bg-gradient-to-b from-cyan-300 via-cyan-400 to-sky-600 bg-clip-text text-6xl font-black tracking-tight text-transparent drop-shadow-[0_12px_28px_rgba(34,211,238,.45)] lg:text-8xl">
                KOÇLUK
</span>
</h1>

<p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              16 yıllık eğitim deneyimiyle; ilkokul, ortaokul ve lise öğrencilerine
              Türkçe, Türk Dili ve Edebiyatı, LGS–YKS hazırlık, hızlı okuma,
              paragraf soru çözüm teknikleri, yeni nesil soru çözümü ve öğrenci
              koçluğu alanlarında bireysel gelişim odaklı eğitim sunuyorum.
</p>

<div className="mt-10 flex flex-wrap gap-4">
<Link href="#iletisim" className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold transition hover:bg-cyan-400">
                Eğitim Planlama Çalışmaları
</Link>

<Link href="#egitimler" className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/10">
                Öğrenci Koçluğu Planlama
</Link>
</div>

<div className="mt-10 flex flex-wrap gap-3">
<span className="rounded-full bg-white/10 px-4 py-2 text-sm">📘 LGS Hazırlık</span>
<span className="rounded-full bg-white/10 px-4 py-2 text-sm">🎓 TYT & YKS Türkçe</span>
<span className="rounded-full bg-white/10 px-4 py-2 text-sm">🚀 Öğrenci Koçluğu</span>
</div>

<div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                ["16+","Yıl Deneyim"],
                ["1200+","Öğrenci"],
                ["5000+","Soru Analizi"],
                ["%96","Memnuniyet"],
              ].map(([v,t])=>(
<div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10">
<div className="text-3xl font-black text-cyan-400">{v}</div>
<div className="mt-2 text-sm text-slate-300">{t}</div>
</div>
              ))}
</div>

</div>

<div className="relative flex justify-center">
<div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]" />
<div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
<Image
                src="/images/anasayfa.png"
                alt="Bünyamin Hoca"
                width={700}
                height={850}
                priority
                className="rounded-[28px] object-cover transition duration-500 hover:scale-[1.02]"
              />
</div>
</div>

</div>
</div>
</section>
  );
}

