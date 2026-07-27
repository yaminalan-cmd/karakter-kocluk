export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-100 to-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Başlık */}

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[6px] text-red-600">
            İLETİŞİM
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Size Bir Telefon Kadar Yakınım
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Eğitim programları hakkında bilgi almak veya ücretsiz ön görüşme
            planlamak için bana hemen ulaşabilirsiniz.
          </p>
        </div>

        {/* Kartlar */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {/* Telefon */}

          <a
            href="tel:+905433996178"
            className="group rounded-3xl bg-red-600 p-7 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">📞</div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[4px] opacity-80">
              TELEFON
            </p>

            <h3 className="mt-2 text-3xl font-black">
              0543 399 61 78
            </h3>

            <p className="mt-3 text-base opacity-90">
              Hemen aramak için dokunun.
            </p>

            <div className="mt-6 inline-flex rounded-xl bg-white px-5 py-2.5 font-semibold text-red-600 transition group-hover:scale-105">
              📞 Hemen Ara
            </div>
          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/905364691324?text=Merhaba%20B%C3%BCnyamin%20Hocam.%20Web%20sitenizden%20ula%C5%9F%C4%B1yorum."
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-green-600 p-7 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">💬</div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[4px] opacity-80">
              WHATSAPP
            </p>

            <h3 className="mt-2 text-3xl font-black">
              0536 469 13 24
            </h3>

            <p className="mt-3 text-base opacity-90">
              Tek tıkla mesaj gönderin.
            </p>

            <div className="mt-6 inline-flex rounded-xl bg-white px-5 py-2.5 font-semibold text-green-700 transition group-hover:scale-105">
              💬 Mesaj Gönder
            </div>
          </a>

          {/* Mail */}

          <a
            href="mailto:karakterdanismanlik@gmail.com"
            className="group rounded-3xl bg-slate-900 p-7 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">📧</div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[4px] text-blue-300">
              E-POSTA
            </p>

            <h3 className="mt-2 text-xl font-black break-all">
              karakterdanismanlik@gmail.com
            </h3>

            <p className="mt-3 text-base text-slate-300">
              Sorularınızı e-posta ile iletebilirsiniz.
            </p>

            <div className="mt-6 inline-flex rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white transition group-hover:scale-105">
              📧 Mail Gönder
            </div>
          </a>

          {/* Konum */}

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-7 text-white shadow-xl">

            <div className="text-5xl">📍</div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[4px] opacity-80">
              KONUM
            </p>

            <h3 className="mt-2 text-3xl font-black">
              İstanbul
            </h3>

            <p className="mt-3 text-base opacity-90">
              Online ve yüz yüze eğitim seçenekleriyle öğrencilerime destek
              oluyorum.
            </p>

          </div>

        </div>

        {/* Alt CTA */}

        <div className="mt-20 rounded-[32px] bg-slate-900 px-8 py-12 text-center text-white shadow-2xl">

          <h2 className="text-3xl font-black md:text-4xl">
            Başarı Doğru Rehberlikle Başlar
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Çocuğunuzun eğitim yolculuğunu birlikte planlayalım.
            Bir telefon ya da WhatsApp mesajı kadar yakınım.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/905364691324?text=Merhaba%20B%C3%BCnyamin%20Hocam.%20Web%20sitenizden%20ula%C5%9F%C4%B1yorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-7 py-3 font-bold text-white transition hover:scale-105 hover:bg-green-600"
            >
              💬 WhatsApp
            </a>

            <a
              href="tel:+905433996178"
              className="rounded-xl bg-red-600 px-7 py-3 font-bold text-white transition hover:scale-105 hover:bg-red-700"
            >
              📞 Telefon
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}