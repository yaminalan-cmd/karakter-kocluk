"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "LGS Hazırlık",
    desc: "Yeni nesil sorular, paragraf çalışmaları ve sınav stratejileri.",
    detail:
      "LGS hazırlık sürecinde öğrencinin seviyesi analiz edilir ve kişiye özel çalışma planı hazırlanır.",
    list: ["Paragraf Teknikleri","Dil Bilgisi","Yeni Nesil Sorular","Deneme Analizi"],
  },
  {
    title: "Türkçe Özel Ders",
    desc: "İlkokul, ortaokul ve lise öğrencilerine birebir Türkçe eğitimi.",
    detail: "Okuduğunu anlama, dil bilgisi ve yazma becerileri geliştirilir.",
    list: ["Okuduğunu Anlama","Yazma","Okuma","Birebir Eğitim"],
  },
  {
    title: "Öğrenci Koçluğu",
    desc: "Planlama, motivasyon ve düzenli çalışma alışkanlığı.",
    detail: "Haftalık takip, veli görüşmeleri ve hedef odaklı çalışma yapılır.",
    list: ["Haftalık Takip","Program","Veli","Motivasyon"],
  },
  {
    title: "TYT • YKS Türkçe",
    desc: "Profesyonel TYT Türkçe hazırlığı.",
    detail: "Paragraf kampı ve deneme analizleri ile netler artırılır.",
    list: ["Paragraf","Deneme","Soru","Strateji"],
  },
];

export default function Services() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
<section id="services" className="relative overflow-hidden bg-slate-950 py-28">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<span className="rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            EĞİTİMLER
</span>
<h2 className="mt-6 text-5xl font-black text-white">
            Size En Uygun <span className="text-cyan-400">Eğitim Programı</span>
</h2>
<p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Her öğrenci için bireysel eğitim programı hazırlanır.
</p>
</div>

<div className="grid items-center gap-10 lg:grid-cols-[300px_1fr_300px]">
<div className="hidden justify-center lg:flex">
<Image src="/images/ogrenci.png" alt="Öğrenci" width={300} height={500} className="rounded-3xl shadow-2xl"/>
</div>

<div className="grid gap-8 md:grid-cols-2">
            {services.map((item,index)=>(
<div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
<h3 className="text-2xl font-bold text-white">{item.title}</h3>
<p className="mt-4 text-slate-300">{item.desc}</p>

<ul className="mt-6 space-y-2">
                  {item.list.map(text=>(
<li key={text} className="text-slate-200">✓ {text}</li>
                  ))}
</ul>

<button
                  onClick={()=>setOpenCard(openCard===index?null:index)}
                  className="mt-8 w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white">
                  {openCard===index ? "Kapat" : "Detaylı İncele"}
</button>

                {openCard===index && (
<div className="mt-6 rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-6">
<h4 className="mb-4 text-xl font-bold text-cyan-300">Program İçeriği</h4>
<p className="leading-8 text-slate-300">{item.detail}</p>

<div className="mt-8 rounded-2xl bg-slate-800/60 p-5">
<h5 className="mb-3 text-lg font-semibold text-white">Programda Neler Var?</h5>
<ul className="space-y-2 text-slate-300">
<li>✓ Öğrenciye özel çalışma planı</li>
<li>✓ Haftalık gelişim takibi</li>
<li>✓ Yeni nesil soru çalışmaları</li>
<li>✓ Paragraf hızlandırma teknikleri</li>
<li>✓ Düzenli deneme analizleri</li>
<li>✓ Veli bilgilendirme görüşmeleri</li>
</ul>
</div>

<div className="mt-8 flex flex-col gap-4 md:flex-row">
<a href="https://wa.me/905364691324" target="_blank" rel="noopener noreferrer"
                        className="flex-1 rounded-xl bg-green-500 py-4 text-center font-bold text-white">
                        WhatsApp'tan Bilgi Al
</a>
<a href="#contact"
                        className="flex-1 rounded-xl border border-cyan-400 py-4 text-center font-bold text-cyan-300">
                        İletişime Geç
</a>
</div>
</div>
                )}
</div>
            ))}
</div>

<div className="hidden justify-center lg:flex">
<Image src="/images/lgs.png" alt="LGS" width={500} height={500} className="rounded-3xl shadow-2xl"/>
</div>
</div>
</div>
</section>
  );
}

