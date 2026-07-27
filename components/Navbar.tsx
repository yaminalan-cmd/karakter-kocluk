import Image from "next/image";

export default function Navbar() {
  const menus = [
    { title: "Ana Sayfa", href: "#home" },
    { title: "Karakter Koçluk", href: "#features" },
    { title: "Hakkımda", href: "#about" },
    { title: "Eğitimler", href: "#services" },
    { title: "Başarılar", href: "#success" },
    { title: "Kitap Kulübü", href: "#books" },
    { title: "Yorumlar", href: "#testimonials" },
    { title: "İletişim", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <Image
            src="/images/logo.png"
            alt="Karakter Koçluk"
            width={52}
            height={52}
            priority
          />

          <div className="leading-tight">
            <h2 className="text-xl font-extrabold text-white">
              Karakter Koçluk
            </h2>

            <p className="text-xs tracking-wide text-cyan-300">
              Eğitim ve Danışmanlık
            </p>
          </div>
        </a>

        {/* Menü */}
        <nav className="hidden items-center gap-7 md:flex">
          {menus.map((menu) => (
            <a
              key={menu.title}
              href={menu.href}
              className="text-sm font-medium text-white transition duration-300 hover:text-cyan-400"
            >
              {menu.title}
            </a>
          ))}
        </nav>

        {/* Buton */}
        <a
          href="#contact"
          className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          Başvur
        </a>

      </div>
    </header>
  );
}