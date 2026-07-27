export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Üst Kısım */}

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black">
              KARAKTER
              <br />
              KOÇLUK
            </h2>

            <p className="mt-3 text-red-500 font-semibold">
              Bünyamin Alan
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Türkçe ve Türk Edebiyatı Öğretmeni olarak
              öğrencilerimin yalnızca sınav başarısını değil;
              okuma kültürünü, özgüvenini ve öğrenme becerilerini
              geliştirmeyi hedefliyorum.
            </p>

          </div>

          {/* Menü */}

          <div>

            <h3 className="text-xl font-bold">
              Menü
            </h3>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>
                <a href="#hero" className="hover:text-white">
                  Ana Sayfa
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  Hakkımda
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white">
                  Eğitimler
                </a>
              </li>

              <li>
                <a href="#books" className="hover:text-white">
                  Kitap Kulübü
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  İletişim
                </a>
              </li>

            </ul>

          </div>

          {/* İletişim */}

          <div>

            <h3 className="text-xl font-bold">
              İletişim
            </h3>

            <div className="mt-6 space-y-4 text-slate-400">

              <a
                href="tel:+905433996178"
                className="block hover:text-white"
              >
                📞 0543 399 61 78
              </a>

              <a
                href="https://wa.me/905364691324"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-green-400"
              >
                💬 WhatsApp
              </a>

              <a
                href="mailto:karakterdanismanlik@gmail.com"
                className="block hover:text-white break-all"
              >
                📧 karakterdanismanlik@gmail.com
              </a>

              <p>
                📍 İstanbul
              </p>

            </div>

          </div>

          {/* Sosyal */}

          <div>

            <h3 className="text-xl font-bold">
              Karakter Koçluk
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Eğitim yolculuğunuz boyunca
              yanınızda olmaktan mutluluk duyarım.
            </p>

            <a
              href="https://wa.me/905364691324?text=Merhaba%20B%C3%BCnyamin%20Hocam."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-700"
            >
              💬 WhatsApp'tan Yaz
            </a>

          </div>

        </div>

      </div>

      {/* Alt Çizgi */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 Karakter Koçluk • Tüm Hakları Saklıdır.
          </p>

          <p>
            Tasarım & Geliştirme ❤️ Karakter Koçluk
          </p>

        </div>

      </div>

    </footer>
  );
}